<template>
    <div>
        <div class="gva-search-box">
            <el-form ref="searchForm" :inline="true" :model="searchInfo">
                <el-form-item label="反馈人">
                    <el-select v-model="value" placeholder="北京安新">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="反馈单位">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品序列号">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品名称">
                    <el-input v-model="searchInfo.apiGroup" placeholder="受检物名称" />
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker v-model="value" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
                    <el-button icon="refresh" @click="onReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="gva-table-box">
            <div class="gva-btn-list">
                <el-button type="primary" icon="plus" @click="openDialog('addApi')">新增</el-button>
                <el-popover v-model="freshVisible" placement="top" width="160">
                    <p>确定要刷新Casbin缓存吗？</p>
                    <div style="text-align: right; margin-top: 8px;">
                        <el-button type="primary" link @click="freshVisible = false">取消</el-button>
                        <el-button type="primary" @click="onFresh">确定</el-button>
                    </div>
                    <template #reference>
                        <el-button icon="Refresh" @click="freshVisible = true">刷新缓存</el-button>
                    </template>
                </el-popover>
            </div>
            <el-table :data="tableData" @sort-change="sortChange" @selection-change="handleSelectionChange">
                <el-table-column align="left" label="ID" min-width="150" prop="ID" sortable="custom" />
                <el-table-column align="left" label="产品名称" min-width="150" prop="path" sortable="custom" />
                <el-table-column align="left" label="产品序列号（物料编码）" min-width="230" prop="apiGroup" sortable="custom" />
                <el-table-column align="left" label="客户名称" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="投诉人" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="项目" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="状态" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="受检物号" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="内部反馈人" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="内部反馈单位" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="问题描述（5W2H）附件照片" min-width="250" prop="description"
                    sortable="custom" />
                <el-table-column align="left" label="问题分级" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="短期措施/计划完成时间" min-width="250" prop="description"
                    sortable="custom" />
                <el-table-column align="left" label="原因分析/附件/描述" min-width="230" prop="description" sortable="custom" />
                <el-table-column align="left" label="整改措施" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="客服订单" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="负责人" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="成本" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="整改计划完成时间" min-width="200" prop="description" sortable="custom" />
                <el-table-column align="left" label="提交时间" min-width="150" prop="description" sortable="custom" />
                <el-table-column align="left" label="关闭时间" min-width="150" prop="description" sortable="custom">

                    <template #default="scope">
                        <div>
                            {{ scope.row.method }} / {{ methodFilter(scope.row.method) }}
                        </div>
                    </template>
                </el-table-column>

                <el-table-column align="left" fixed="right" label="操作" width="300">
                    <template #default="scope">
                        <el-button icon="view" type="primary" link @click="editApiFunc(scope.row)">查看</el-button>
                        <el-button icon="edit" type="primary" link @click="deleteApiFunc(scope.row)">修改</el-button>
                        <el-button icon="delete" type="primary" link @click="editApiFunc(scope.row)">删除</el-button>
                        <el-button icon="circle-close" type="primary" link
                            @click="editApiFunc(scope.row)">关闭</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="gva-pagination">
                <el-pagination :current-page="page" :page-size="pageSize" :page-sizes="[10, 30, 50, 100]" :total="total"
                    layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange"
                    @size-change="handleSizeChange" />
            </div>

        </div>

        <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" :title="dialogTitle" width="70%">
            <el-form ref="apiForm" :model="form" :rules="rules" :inline="true">
                <el-form-item label="编号" prop="path" style="width:25%">
                    <el-input placeholder="受检物名称" size="mini" />
                </el-form-item>
                <el-form-item label="部门" prop="method" style="width:20%">
                    <el-select v-model="form.method" placeholder="北京安新" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="类型" prop="method" style="width:20%">
                    <el-select v-model="form.method" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="类别" prop="method" style="width:20%">
                    <el-select v-model="form.method" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="处理方式" prop="method" style="width:30%">
                    <el-select v-model="form.method" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="项目" prop="method" style="width:30%">
                    <el-select v-model="form.method" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="受检物名称" prop="path" style="width:30%">
                    <el-input placeholder="受检物名称" size="mini" />
                </el-form-item>
                <el-form-item label="受检物号" prop="path" style="width:30%">
                    <el-input placeholder="受检物号" size="mini" />
                </el-form-item>
                <el-form-item label="图纸号" prop="path" style="width:30%">
                    <el-input placeholder="图纸号" size="mini" />
                </el-form-item>
                <el-form-item label="版本号" prop="path" style="width:30%">
                    <el-input placeholder="版本号" size="mini" />
                </el-form-item>
                <el-form-item label="采购订单号" prop="path" style="width:30%">
                    <el-input placeholder="采购订单号" size="mini" />
                </el-form-item>
                <el-form-item label="生产订单号" prop="path" style="width:30%">
                    <el-input placeholder="生产订单号" size="mini" />
                </el-form-item>
                <el-form-item label="发货单号" prop="path" style="width:30%">
                    <el-input placeholder="发货单号" size="mini" />
                </el-form-item>
                <el-form-item label="收货数量" prop="path" style="width:30%">
                    <el-input placeholder="收货数量" size="mini" />
                </el-form-item>
                <el-form-item label="货物拒收数量" prop="path" style="width:30%">
                    <el-input placeholder="货物拒收数量" size="mini" />
                </el-form-item>
                <el-form-item label="样品检验数量" prop="path" style="width:30%">
                    <el-input placeholder="样品检验数量" size="mini" />
                </el-form-item>
                <el-form-item label="样品拒收数量" prop="path" style="width:30%">
                    <el-input placeholder="样品拒收数量" size="mini" />
                </el-form-item>
                <el-form-item label="供应商" prop="method" style="width:30%">
                    <el-select v-model="form.method" placeholder="供应商" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value"
                            :label="`${item.label}(${item.value})`" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="检验日期" prop="method" style="width:30%">
                    <el-date-picker v-model="value" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="不合格描述" prop="method" style="width:80%">
                    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="50" show-word-limit
                        :rows="10" />
                </el-form-item>
                <el-form-item label="图片上传" prop="method" style="width:100%">
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange" :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" @click="enterDialog">确 定</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import {
    getApiById,
    getApiList,
    createApi,
    updateApi,
    deleteApi,
    deleteApisByIds,
    freshCasbin
} from '@/api/api'
import { toSQLLine } from '@/utils/stringFun'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { VideoCameraFilled } from '@element-plus/icons-vue'
import { toDoc } from '@/utils/doc'

defineOptions({
    name: 'Api',
})

const methodFilter = (value) => {
    const target = methodOptions.value.filter(item => item.value === value)[0]
    return target && `${target.label}`
}

const apis = ref([])
const form = ref({
    path: '',
    apiGroup: '',
    method: '',
    description: ''
})
const methodOptions = ref([
    {
        value: 'POST',
        label: '创建',
        type: 'success'
    },
    {
        value: 'GET',
        label: '查看',
        type: ''
    },
    {
        value: 'PUT',
        label: '更新',
        type: 'warning'
    },
    {
        value: 'DELETE',
        label: '删除',
        type: 'danger'
    }
])

const type = ref('')
const rules = ref({
    path: [{ required: true, message: '请输入api路径', trigger: 'blur' }],
    apiGroup: [
        { required: true, message: '请输入组名称', trigger: 'blur' }
    ],
    method: [
        { required: true, message: '请选择请求方式', trigger: 'blur' }
    ],
    description: [
        { required: true, message: '请输入api介绍', trigger: 'blur' }
    ]
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

const onReset = () => {
    searchInfo.value = {}
}
// 搜索

const onSubmit = () => {
    page.value = 1
    pageSize.value = 10
    getTableData()
}

// 分页
const handleSizeChange = (val) => {
    pageSize.value = val
    getTableData()
}

const handleCurrentChange = (val) => {
    page.value = val
    getTableData()
}

// 排序
const sortChange = ({ prop, order }) => {
    if (prop) {
        if (prop === 'ID') {
            prop = 'id'
        }
        searchInfo.value.orderKey = toSQLLine(prop)
        searchInfo.value.desc = order === 'descending'
    }
    getTableData()
}

// 查询
const getTableData = async () => {
    const table = await getApiList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    if (table.code === 0) {
        tableData.value = table.data.list
        total.value = table.data.total
        page.value = table.data.page
        pageSize.value = table.data.pageSize
    }
}

getTableData()

// 批量操作
const handleSelectionChange = (val) => {
    apis.value = val
}

const deleteVisible = ref(false)
const onDelete = async () => {
    const ids = apis.value.map(item => item.ID)
    const res = await deleteApisByIds({ ids })
    if (res.code === 0) {
        ElMessage({
            type: 'success',
            message: res.msg
        })
        if (tableData.value.length === ids.length && page.value > 1) {
            page.value--
        }
        deleteVisible.value = false
        getTableData()
    }
}
const freshVisible = ref(false)
const onFresh = async () => {
    const res = await freshCasbin()
    if (res.code === 0) {
        ElMessage({
            type: 'success',
            message: res.msg
        })
    }
    freshVisible.value = false
}

// 弹窗相关
const apiForm = ref(null)
const initForm = () => {
    apiForm.value.resetFields()
    form.value = {
        path: '',
        apiGroup: '',
        method: '',
        description: ''
    }
}

const dialogTitle = ref('添加不合格品')
const dialogFormVisible = ref(false)
const openDialog = (key) => {
    switch (key) {
        case 'addApi':
            dialogTitle.value = '添加不合格品'
            break
        case 'edit':
            dialogTitle.value = '编辑Api'
            break
        default:
            break
    }
    type.value = key
    dialogFormVisible.value = true
}
const closeDialog = () => {
    initForm()
    dialogFormVisible.value = false
}

const editApiFunc = async (row) => {
    const res = await getApiById({ id: row.ID })
    form.value = res.data.api
    openDialog('edit')
}

const enterDialog = async () => {
    apiForm.value.validate(async valid => {
        if (valid) {
            switch (type.value) {
                case 'addApi':
                    {
                        const res = await createApi(form.value)
                        if (res.code === 0) {
                            ElMessage({
                                type: 'success',
                                message: '添加成功',
                                showClose: true
                            })
                        }
                        getTableData()
                        closeDialog()
                    }

                    break
                case 'edit':
                    {
                        const res = await updateApi(form.value)
                        if (res.code === 0) {
                            ElMessage({
                                type: 'success',
                                message: '编辑成功',
                                showClose: true
                            })
                        }
                        getTableData()
                        closeDialog()
                    }
                    break
                default:
                    // eslint-disable-next-line no-lone-blocks
                    {
                        ElMessage({
                            type: 'error',
                            message: '未知操作',
                            showClose: true
                        })
                    }
                    break
            }
        }
    })
}

const deleteApiFunc = async (row) => {
    ElMessageBox.confirm('此操作将永久删除所有角色下该api, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    })
        .then(async () => {
            const res = await deleteApi(row)
            if (res.code === 0) {
                ElMessage({
                    type: 'success',
                    message: '删除成功!'
                })
                if (tableData.value.length === 1 && page.value > 1) {
                    page.value--
                }
                getTableData()
            }
        })
}

</script>

<style scoped lang="scss">
.warning {
    color: #dc143c;
}
</style>