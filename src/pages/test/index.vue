<template>
    <div>
<!--        <Badge :offset="[5,5]">-->
<!--            <a href="#" class="demo-badge" style="margin-left: 32px"></a>-->
<!--            <div @click.stop="handleClick" slot="count" >-->
<!--                <Icon type="ios-checkmark-circle-outline"  size="20" color="#19be6b"/>-->
<!--            </div>-->
<!--        </Badge>-->

<!--        复制测试-->
<!--        <Button class="ivu-mr-8" icon="md-copy" type="primary" ghost>-->
<!--            <a class="clip-btn"-->
<!--               data-clipboard-target="#copyContent"-->
<!--               href="javascript:void(0);">复制</a>-->
<!--        </Button>-->
<!--        <div id="copy_content">-->
<!--            <p>{{ content }} ☆☆☆☆</p>-->
<!--&lt;!&ndash;            <Rate v-model="value" />&ndash;&gt;-->
<!--&lt;!&ndash;            <Icon type="md-star" />&ndash;&gt;-->
<!--            <img src="//files.catbox.moe/nn0u25.jpg" alt="">-->
<!--            <img :src="imgUrl.substring(imgUrl.indexOf('/'))" alt="">-->
<!--        </div>-->


<!--        问卷调查-->
<!--        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="top">-->
<!--            <FormItem label="1.请问您的姓名是？" prop="name">-->
<!--                <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>-->
<!--            </FormItem>-->
<!--            <FormItem label="3.请问您的科目是？" prop="subject">-->
<!--                <Select v-model="formValidate.subject" placeholder="请选择科目">-->
<!--                    <Option value="beijing">语文</Option>-->
<!--                    <Option value="shanghai">数学</Option>-->
<!--                </Select>-->
<!--            </FormItem>-->
<!--            <FormItem label="4.请问您的性别是？" prop="gender">-->
<!--                <RadioGroup v-model="formValidate.gender" vertical>-->
<!--                    <Radio label="male">男</Radio>-->
<!--                    <Radio label="female">女</Radio>-->
<!--                    <Radio label="secret">保密</Radio>-->
<!--                </RadioGroup>-->
<!--            </FormItem>-->
<!--            <FormItem label="5.请选择您的兴趣爱好：" prop="interest">-->
<!--                <CheckboxGroup v-model="formValidate.interest" style="display: flex;flex-direction: column">-->
<!--                    <Checkbox label="吃饭"></Checkbox>-->
<!--                    <Checkbox label="睡觉"></Checkbox>-->
<!--                    <Checkbox label="打豆豆"></Checkbox>-->
<!--                </CheckboxGroup>-->
<!--            </FormItem>-->
<!--            <FormItem label="6.请介绍一下你自己：" prop="desc">-->
<!--                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>-->
<!--            </FormItem>-->
<!--            <FormItem>-->
<!--                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>-->
<!--                <Button @click="handleReset('formValidate')" class="ivu-ml-8">重置</Button>-->
<!--            </FormItem>-->
<!--        </Form>-->


        <Card :bordered="false" dis-hover class="ivu-mb">
            <div slot="title">
                <Avatar icon="md-heart" size="small" v-color="'#ff4d4f'" v-bg-color="'#fff1f0'" />
                <span class="ivu-pl-8">测试模块</span>
            </div>
            <div slot="extra">
                <Tooltip placement="top" content="配置">
                    <Icon type="md-settings" />
                </Tooltip>
            </div>
            <shortcut />
        </Card>
    </div>
</template>

<script>
    // <!--  jsonp解决跨域问题  -->
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'http://www.b.com/getdata?callback=demo';

    import shortcut from "./shortcut";

    import Clipboard from 'clipboard';

    export default {
        name: 'index',
        props: {
            content: {
                default: '我是要复制的内容'
            },
            imgUrl: {
                default: 'https//dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                // default: 'http://storage-1252908908.cos.ap-shanghai.myqcloud.com/44a88fa6b33ddde657d699406de528ab.jpg'
            }
        },
        components: {
            shortcut
        },
        data(){
            return {
                show: false,
                value: 5,
                btnCopy:'',

                // 问卷
                formValidate: {
                    name: '',
                    subject: '',
                    gender: '',
                    interest: [],
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    subject: [
                        { required: true, message: '科目不能为空', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '性别不能为空', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '请至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多只能选两个', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '个人介绍不能为空', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20个字', trigger: 'blur' }
                    ]
                },
                list_item_height: 0, // 折叠部分初始高度
            }
        },
        methods: {
            handleClick() {
                this.$Message.success('点击了')
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            // 收起、展开
            handleFold(index) {
                const list_item = this.$refs.list_item[index];
                let height = list_item.offsetHeight;
                if(height === this.list_item_height) { // 展开
                    list_item.style.height = 'auto';
                    height = list_item.offsetHeight;
                    list_item.style.height = this.list_item_height + 'px';
                    let f = document.body.offsetHeight; // 必须
                    list_item.style.height = height + 'px';
                } else { // 收起
                    list_item.style.height = this.list_item_height + 'px';
                }
            }
        },
        mounted() {
            this.btnCopy = new Clipboard('.clip-btn',{
                target: function(trigger) {
                    return document.getElementById('copy_content');
                }
            })
            this.btnCopy.on('success', (e) => {
                console.log('text=',e.text)
                this.$Message.success('复制成功')
                e.clearSelection()
            })
            this.btnCopy.on('error', (e) => {
                this.$Message.error('复制失败')
                e.clearSelection()
            })
        },
        beforeDestroy () {
            // 销毁clipboard
            if (this.btnCopy && this.btnCopy.destroy) {
                this.btnCopy.destroy()
            }
        }}
</script>

<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
