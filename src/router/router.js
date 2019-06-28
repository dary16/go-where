let Vue;
class KRouter {
    static install(_Vue) {
        Vue = _Vue;
        Vue.mixin({
            beforeCreate() {
                Vue.prototype.$kkbrouter = 'I am router';
                //启动路由
                if (this.$options.router) {
                    Vue.prototype.$krouter = this.$options.router;
                    this.$options.router.init();
                }
            }
        });
    }
    constructor(options) {
        this.$options = options;
        this.routeMap = {};
        //使用vue的响应式机制，路由切换的时候，做一些事情
        this.app = new Vue({
            data: {
                //默认根目录
                current: '/'
            }
        });
    }
    init() {
        //启动整个路由
        ///监听hashchange事件；
        this.bindEvents();
        //处理路由表；
        this.createRouterMap();
        //初始化组件 router-view和router-link
        this.initComponent();
    }
    bindEvents() {
        window.addEventListener('onhashchange', this.onHashChange.bind(this), false);
        window.addEventListener('load', this.onHashChange.bind(this), false);
    }
    getHash() {
        return window.location.hash.slice(1) || '/';
    }
    push(url) {
        window.location.hash = url;
    }
    getFrom(e) {
        let from, to;
        if (e.newURL) {
            //这是一个hashchange
            from = e.oldURL.split('#')[1];
            to = e.newURL.split('#')[1];
        } else {
            from = '';
            to = this.gethash();
        }
        return { from, to };
    }
    onHashChange(e) {
        //获取当前的哈希值
        let hash = this.getHash();
        let router = this.routerMap[hash];
        let { from, to } = this.getFrom(e);
        //修改this.app.current 借用了vue的响应式机制
        if (router.beforeEnter) {
            //有生命周期
            router.beforeEnter(from, to, () => {
                this.app.current = hash;
            });
        } else {
            this.app.current = hash;
        }
    }
    createRouterMap() {
        this.$options.routes.forEach((item) => {
            this.routeMap[item.path] = item;
        });
    }
    initComponent() {
        Vue.compontent('router-view', {
            render: (h) => {
                const component = this.routerMap[this.app.current].component;
                //使用h新建一个虚拟dom
                return h(component);
            }
        });
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                //h三个参数：组件名，参数，子元素
                return h(
                    'a', {
                        attrs: {
                            href: '#' + this.to
                        }
                    }, [this.$slots.default]
                );
            }
            // template:"<a :href='to'><slot></slot></a>"
        });
    }
}

export default KRouter;