import { Component } from '@/core/Component';
import { Routes, Router } from '@/core/Router';
import { Header, PostDetail } from '@/components';
import { HomePage, CounterPage } from '@/pages';

export default class App extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({});
    }

    template() {
        return ``;
    }

    didMount() {
        const routes = [
            { path: '/', Component: HomePage },
            { path: '/counter', Component: CounterPage },
            { path: '/post/:id', Component: PostDetail },
        ];

        new Routes({ $parent: this.$parent, routes, Header });
        Router.navigateTo('/'); // 등록 후 메인 페이지로 이동
    }
}
