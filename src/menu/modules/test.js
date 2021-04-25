const pre = '/test/';

export default {
    path: '/test',
    title: '测试页面',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-form',
    children: [
        {
            path: `${pre}test`,
            name: `${pre}test`,
            title: '测试'
        },
        {
            path: `${pre}html5`,
            name: `${pre}html5`,
            title: 'html5新特性',
            type: 'hidden'
        },
        {
            path: `${pre}d3js`,
            name: `${pre}d3js`,
            title: 'd3js',
            type: 'hidden'
        }
    ]
}
