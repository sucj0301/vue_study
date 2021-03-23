<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="Quill 编辑器" content="对 Quill 进行过封装，可以使用 v-model 绑定数据。" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <i-quill v-model="value" :min-height="400" />
            <Divider />
            <Button @click="handleAddText">增加文本</Button>
            <Button @click="handleAddImg" class="ivu-ml">增加图片</Button>
        </Card>

        <Card title="HTML 内容" :bordered="false" dis-hover class="ivu-mt">
            {{ value }}
        </Card>
    </div>
</template>
<script>
    import iQuill from '@/components/quill';

    export default {
        name: 'editor-quill',
        components: { iQuill },
        data () {
            return {
                value: `<h1>iView Admin Pro刚刚个<img src="data:image/png;base64,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"><span style="background-color: rgb(250, 204, 204);">方不方便nnn</span>你就就</h1>`
            }
        },
        methods: {
            handleAddText () {
                this.value += '<p><span style="color: #19be6b;">新增加的内容。</span></p>';
            },
            handleAddImg () {
                this.value += '<p><img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"></p>';
            }
        }
    }
</script>
