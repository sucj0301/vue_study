import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'test-';

export default {
    path: '/test',
    name: 'test',
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'test',
            name: `${pre}test`,
            meta: {
                ...meta,
                title: '测试'
            },
            component: () => import('@/pages/test/index')
        },
        {
            path: 'html5',
            name: `${pre}html5`,
            meta: {
                ...meta,
                title: 'html5新特性'
            },
            component: () => import('@/pages/test/component/html5_demo')
        },
        {
            path: 'd3js',
            name: `${pre}d3js`,
            meta: {
                ...meta,
                title: 'd3js'
            },
            component: () => import('@/pages/test/component/d3js')
        }
    ]
};
