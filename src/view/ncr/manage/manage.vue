<template>
    <div>
        <div class="gva-search-box">
            <el-form ref="searchForm" :inline="true" :model="searchInfo">
                <el-form-item label="部门" style="width:15%" prop="method">
                    <el-select v-model="searchInfo.apiGroup" placeholder="选择部门">
                        <el-option v-for="item in departmentList" :key="item.authorityId" :label="item.authorityName"
                            :value="item.authorityName">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类型" style="width:15%" prop="method">
                    <el-select v-model="searchInfo.apiGroup" placeholder="请选择">
                        <el-option v-for="item in mold" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类别" prop="method" style="width:16%">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in genreList1" :key="item.genre" :label="item.name" :value="item.genre">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="受检物名称" prop="method" style="width:20%">
                    <el-input v-model="searchInfo.apiGroup" placeholder="受检物名称" />
                </el-form-item>
                <el-form-item label="受检物号" prop="method" style="width:20%">
                    <el-input v-model="searchInfo.apiGroup" placeholder="受检物号" />
                </el-form-item>
                <el-form-item label="处理方式" prop="method" style="width:15%">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in methodOptions" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目名称" prop="method" style="width:20%">
                    <el-input v-model="searchInfo.apiGroup" placeholder="项目名称" />
                </el-form-item>
                <el-form-item label="填表日期" prop="method" style="width:30%">
                    <el-date-picker v-model="searchInfo.checkout_date" type="date" placeholder="选择日期"
                        value-format="YYYY-MM-DDT15:04:05Z">
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
            </div>
            <el-table :data="tableData" @sort-change="sortChange" @selection-change="handleSelectionChange">
                <el-table-column align="left" label="ID" min-width="150" prop="ID" sortable="custom" />
                <el-table-column align="left" label="编号" min-width="150" prop="serialnumber" sortable="custom" />
                <el-table-column align="left" label="部门" min-width="150" prop="department" sortable="custom" />
                <el-table-column align="left" label="类型" min-width="150" prop="type_m" sortable="custom" />
                <el-table-column align="left" label="类别" min-width="150" prop="category" sortable="custom" />
                <el-table-column align="left" label="项目" min-width="150" prop="project" sortable="custom" />
                <el-table-column align="left" label="受检物名称" min-width="150" prop="checkout_name" sortable="custom" />
                <el-table-column align="left" label="受检物号" min-width="150" prop="checkout_number" sortable="custom" />
                <el-table-column align="left" label="处理方式" min-width="150" prop="process_mode" sortable="custom" />
                <el-table-column align="left" label="责任部门" min-width="150" prop="duty_department" sortable="custom" />
                <el-table-column align="left" label="检验日期" min-width="150" prop="checkout_date" sortable="custom" />
                <el-table-column align="left" label="填表日期" min-width="150" prop="fill_from_date" sortable="custom">
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
                        <el-button icon="tools" type="primary" link @click="editApiFunc(scope.row)">返工</el-button>
                        <el-button icon="setting" type="primary" link @click="editApiFunc(scope.row)">返修</el-button>
                        <el-button icon="finished" type="primary" link @click="editApiFunc(scope.row)">让步接收</el-button>
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
                <el-form-item label="编号" prop="serialnumber" style="width:25%">
                    <el-input placeholder="编号" size="mini" v-model="form.serialnumber" />
                </el-form-item>
                <el-form-item label="部门" prop="department" style="width:20%">
                    <el-select v-model="form.department" placeholder="北京安新" style="width:100%">
                        <el-option v-for="item in departmentList" :key="item.authorityId"
                            :label="`${item.authorityName}`" :value="item.authorityName" />
                    </el-select>
                </el-form-item>
                <el-form-item label="类型" prop="type_m" style="width:20%">
                    <el-select v-model="form.type_m" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in mold" :key="item.value" :label="`${item.label}`"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="类别" prop="category" style="width:20%">
                    <el-select v-model="form.category" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in genreList1" :key="item.genre" :label="`${item.name}`"
                            :value="item.genre" />
                    </el-select>
                </el-form-item>
                <el-form-item label="处理方式" prop="process_mode" style="width:30%">
                    <el-select v-model="form.process_mode" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in methodOptions" :key="item.value" :label="`${item.label}`"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="项目" prop="project" style="width:30%">
                    <el-select v-model="form.project" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in projectList" :key="item.name" :label="`${item.name}`"
                            :value="item.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="受检物名称" prop="checkout_name" style="width:30%">
                    <el-input placeholder="受检物名称" size="mini" v-model="form.checkout_name" />
                </el-form-item>
                <el-form-item label="受检物号" prop="checkout_number" style="width:30%">
                    <el-input placeholder="受检物号" size="mini" v-model="form.checkout_number" />
                </el-form-item>
                <el-form-item label="图纸号" prop="graph_number" style="width:30%">
                    <el-input placeholder="图纸号" size="mini" v-model="form.graph_number" />
                </el-form-item>
                <el-form-item label="版本号" prop="version_number" style="width:30%">
                    <el-input placeholder="版本号" size="mini" v-model="form.version_number" />
                </el-form-item>
                <el-form-item label="采购订单号" prop="purchase_order" style="width:30%">
                    <el-input placeholder="采购订单号" size="mini" v-model="form.purchase_order" />
                </el-form-item>
                <el-form-item label="生产订单号" prop="production_order" style="width:30%">
                    <el-input placeholder="生产订单号" size="mini" v-model="form.production_order" />
                </el-form-item>
                <el-form-item label="发货单号" prop="delivery_order" style="width:30%">
                    <el-input placeholder="发货单号" size="mini" v-model="form.delivery_order" />
                </el-form-item>
                <el-form-item label="收货数量" prop="packages_number" style="width:30%">
                    <el-input placeholder="收货数量" size="mini" v-model="form.packages_number" />
                </el-form-item>
                <el-form-item label="货物拒收数量" prop="reject_packages_number" style="width:30%">
                    <el-input placeholder="货物拒收数量" size="mini" v-model="form.reject_packages_number" />
                </el-form-item>
                <el-form-item label="样品检验数量" prop="sample_checkout_number" style="width:30%">
                    <el-input placeholder="样品检验数量" size="mini" v-model="form.sample_checkout_number" />
                </el-form-item>
                <el-form-item label="样品拒收数量" prop="reject_sample_checkout_number" style="width:30%">
                    <el-input placeholder="样品拒收数量" size="mini" v-model="form.reject_sample_checkout_number" />
                </el-form-item>
                <el-form-item label="责任部门" prop="duty_department" style="width:30%">
                    <el-input placeholder="责任部门" size="mini" v-model="form.duty_department" />
                </el-form-item>
                <el-form-item label="供应商" prop="supplier" style="width:30%">
                    <el-select v-model="form.supplier" placeholder="供应商" style="width:100%">
                        <el-option v-for="item in supplierList" :key="item.name" :label="`${item.genre}`"
                            :value="item.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="检验日期" prop="checkout_date" style="width:30%">
                    <el-date-picker v-model="form.checkout_date" type="date" placeholder="选择日期"
                        value-format="YYYY-MM-DDT15:04:05Z">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="不合格描述" prop="describe" style="width:80%">
                    <el-input type="textarea" placeholder="请输入内容" v-model="form.describe" maxlength="50" show-word-limit
                        :rows="10" />
                </el-form-item>
                <el-form-item label="图片上传" prop="photograph" style="width:100%">
                    <el-upload class="upload-demo" action="/api/fileUploadAndDownload/upload" :on-change="handleChange"
                        :file-list="fileList">
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
    getAuthorityList,
    getGenreList,
    getSupplierList,
    getProjectList,

} from '@/api/manage.js'
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
const departmentList = ref([])
const genreList1 = ref([])
const supplierList = ref([])
const projectList = ref([])
const fileList = ref([
    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
])
const form = ref({
    serialnumber: "",
    department: "",
    type_m: "",
    category: "",
    project: "",
    checkout_name: "",
    checkout_number: "",
    graph_number: "",
    version_number: "",
    purchase_order: "",
    production_order: "",
    delivery_order: "",
    packages_number: "",
    reject_packages_number: "",
    sample_checkout_number: "",
    reject_sample_checkout_number: "",
    supplier: "",
    checkout_date: "",
    describe: "",
    photograph: "",
    process_mode: "",
    duty_department: "",
    cause_desc: "",
    fill_from_date: "",
    disposal_concept: ""
})
const methodOptions = ref([
    {
        value: 'Just Do it',
        label: 'Just Do it',
        type: 'success'
    },
    {
        value: 'A3',
        label: 'A3',
        type: ''
    },
    {
        value: '8D',
        label: '8D',
        type: 'warning'
    }
])

const mold = ref([
    {
        value: '内部',
        label: '内部',
        type: 'success'
    },
    {
        value: '外部',
        label: '外部',
        type: ''
    },
    {
        value: '配做',
        label: '配做',
        type: 'warning'
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


// 部门列表
const department = async () => {
    const table = await getAuthorityList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    if (table.code === 0) {
        departmentList.value = table.data.list
    }
}

department()

// 类别列表
const genreList = async () => {
    const table = await getGenreList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    if (table.code === 0) {
        genreList1.value = table.data.list
    }
}

genreList()

// 类别列表
const supplier = async () => {
    const table = await getSupplierList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    if (table.code === 0) {
        supplierList.value = table.data.list
    }
}

supplier()

// 类别列表
const project = async () => {
    const table = await getProjectList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    if (table.code === 0) {
        projectList.value = table.data.list
    }
}

project()

// 查询
const getTableData = async () => {
    // const table = await getApiList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
    // if (table.code === 0) {
    //     tableData.value = table.data.list
    //     total.value = table.data.total
    //     page.value = table.data.page
    //     pageSize.value = table.data.pageSize
    // }
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
        serialnumber: "",
        department: "",
        type_m: "",
        category: "",
        project: "",
        checkout_name: "",
        checkout_number: "",
        graph_number: "",
        version_number: "",
        purchase_order: "",
        production_order: "",
        delivery_order: "",
        packages_number: "",
        reject_packages_number: "",
        sample_checkout_number: "",
        reject_sample_checkout_number: "",
        supplier: "",
        checkout_date: "",
        describe: "",
        photograph: "",
        process_mode: "",//处事方式
        duty_department: "",
        cause_desc: "", //原因分析
        fill_from_date: "", //填表日期
        disposal_concept: "" //处置方法
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