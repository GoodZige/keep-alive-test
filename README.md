# 使用keep-alive对单一组件缓存多个路由的实现策略
![img](https://github.com/GoodZige/keep-alive-test/blob/master/%E6%BC%94%E7%A4%BA.gif)

有时候会遇到组件里加载了很多东西并需要频繁切换的情况，比如实现一个相册功能，点击组件外图片索引切换组件内的图片，如果不进行缓存操作的话，每次切换都需要重新加载图片，会造成一定的性能浪费，缓存整个组件可避免重复加载的情况。

keep-alive 可以缓存包裹在里面的动态切换组件，组件在进行切换的时候不会进行销毁以及重建，事实上keep-alive 会把需要缓存的 VNode 节点保存在 this.cache 中，如果 VNode 的 name 符合缓存条件，则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。router-view 根据路由加载组件，但同个组件在多个路由中进行跳转时，router-view 被认为始终是同一个组件，路由对应组件的 VNode不会保存在 this.cache ，因此在 router-view 中添加 key 属性，此时路由变化后，keep-alive 会认为组件进行了切换，加入缓存。


