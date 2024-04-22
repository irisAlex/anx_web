<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
// 使用 ECharts 提供的按需引入的接口来打包必须的组件
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口
import * as echarts from 'echarts/core'
// 引入树图图表，图表后缀都为 Chart
import { TreeChart } from 'echarts/charts'
// 引入提示框，组件后缀都为 Component
import { TooltipComponent } from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
// 注册必须的组件
echarts.use([TreeChart, TooltipComponent, CanvasRenderer])
import {
    getManageById
} from '@/api/manage.js'
const chart = ref()
const treeChart = ref()
var option
//$("#main").bind("contextmenu", function () { return false; });
interface Props {
    width?: string | number // 容器宽度
    height?: string | number // 容器高度
    id?: string | number
}
const props = withDefaults(defineProps<Props>(), {
    width: '100%',
    height: '100%',

})
const chartWidth = computed(() => {
    if (typeof props.width === 'number') {
        return props.width + 'px'
    } else {
        return props.width
    }
})
const chartHeight = computed(() => {
    if (typeof props.height === 'number') {
        return props.height + 'px'
    } else {
        return props.height
    }
})

const emit = defineEmits(['clickNode'])
onMounted(() => {
    nextTick(() => {
        initChart()
        showSettingDrawer()
        window.addEventListener('change', () => {
            if (document.getElementById('node') !== null) {
                let node = document.getElementById('node').value;
                if (node !== '' && tooltipParams.data !== null) {
                    const targetElement = findValueInNestedChildren(qualityControlData.value.children, tooltipParams.data.name);
                    if (targetElement !== undefined) {
                        let newNode = {
                            name: node,
                            value: 0,
                            children: [
                            ]
                        }
                        targetElement.children.push(newNode)
                        setOptions(qualityControlData)
                    }
                }
            }
            emit('clickNode', qualityControlData.value)
        })
    })
})

function findValueInNestedChildren(items: any, value: any) {
    const queue = [...items];
    while (queue.length > 0) {
        const currentItem = queue.shift();
        if (currentItem.name === value) {
            return currentItem;
        }
        if (currentItem.children && currentItem.children.length > 0) {
            queue.push(...currentItem.children);
        }
    }
    return undefined;
}


const qualityControlData = ref({
    name: '质量管理',
    children: [
        {
            name: '人',
            value: 1,
            children: [
            ]
        },
        {
            name: '机',
            value: 2,
            children: [
            ]
        },
        {
            name: '料',
            value: 3,
            children: [
            ]
        },
        {
            name: '法',
            value: 4,
            children: [
            ]
        },
        {
            name: '环',
            value: 5,
            children: [
            ]
        },
        {
            name: '测',
            value: 6,
            children: [
            ]
        }
    ]
})

var tooltipParams: any;

function initChart() {
    treeChart.value = echarts.init(chart.value)
    option = {
        tooltip: { // 提示框浮层设置
            hideDelay: 500,
            trigger: 'item',
            triggerOn: 'mousemove', // 提示框触发条件
            enterable: true, // 鼠标是否可进入提示框浮层中，默认false
            confine: true, // 是否将tooltip框限制在图表的区域内
            formatter: function (params: any) {
                tooltipParams = params
                var tooltipContent = '添加新节点<br/>'; // 当前节点的名称
                tooltipContent += '<div><input autocomplete="off" id="node" style=" border: 1px solid rgba(0, 255, 255, 0.1);border-radius: 5px;box-shadow: 0px 0px 5px rgba(0, 0, 255, 0.3);padding: 8px;outline: none;"/> <br/><button id="customButton" style="background-color: #4CAF50;border: none;color: white;padding: 5px 10px;text-align: center;text-decoration: none;display: inline-block;font-size: 15px;border-radius: 1px;cursor: pointer;box-shadow: 0px 0px 10px rgba(76, 175, 80, 0.4); ">添加</button >' +
                    '</div> '; // 添加按钮
                return tooltipContent;
            },
            backgroundColor: '#FFF', // 提示框浮层的背景颜色
            borderColor: '#1890FF', // 提示框浮层的边框颜色
            borderWidth: 1, // 提示框浮层的边框宽
            borderRadius: 8, // 提示框浮层圆角
            padding: [6, 8], // 提示框浮层的内边距
            textStyle: { // 提示框浮层的文本样式
                color: '#333', // 文字颜色
                fontWeight: 400, // 字体粗细
                fontSize: 16, // 字体大小
                lineHeight: 20, // 行高
                width: 60, // 文本显示宽度
                // 文字超出宽度是否截断或者换行；只有配置width时有效
                overflow: 'breakAll', // truncate截断，并在末尾显示ellipsis配置的文本，默认为...;break换行;breakAll换行，并强制单词内换行
                ellipsis: '...'
            },
            extraCssText: 'box-shadow: 0 0 9px rgba(0, 0, 0, 0.3); text-align: right;' // 额外添加到浮层的css样式
        }
    }
    option && treeChart.value.setOption(option, true)
}

const setOptions = (qcd: any) => {
    treeChart.value.setOption({
        series: [
            {
                type: 'tree',
                data: [qcd.value],
                name: '树图',
                top: '1%', // 组件离容器上侧的距离，像素值20，或相对容器的百分比20%
                left: '7%', // 组件离容器左侧的距离
                bottom: '1%', // 组件离容器下侧的距离
                right: '20%', // 组件离容器右侧的距离
                layout: 'orthogonal', // 树图的布局，正交orthogonal和径向radial两种
                orient: 'LR', // 树图中正交布局的方向，'LR','RL','TB','BT'，只有布局是正交时才生效
                edgeShape: 'polyline', // 树图边的形状，有曲线curve和折线polyline两种，只有正交布局下生效
                roam: true, // 是否开启鼠标缩放或平移，默认false
                zoomLock: true,
                initialTreeDepth: 6, // 树图初始的展开层级（深度），根节点是0，不设置时全部展开
                // symbol: 'arrow', // 标记的图形，默认是emptyCircle;circle,rect,roundRect,triangle,diamond,pin,arrow,none
                // symbolRotate: 270, // 配合arrow图形使用效果较好
                symbolSize: 16, // 大于0时是圆圈，等于0时不展示，标记的大小
                itemStyle: { // 树图中每个节点的样式
                    color: '#1890FF', // 节点未展开时的填充色
                    borderColor: 'rgba(255, 144, 0, 1)', // 图形的描边颜色
                    borderWidth: 1, // 描边线宽，为0时无描边
                    borderType: 'dotted', // 描边类型
                    borderCap: 'square', // 指定线段末端的绘制方式butt方形结束，round圆形结束，square
                    shadowColor: 'rgba(0,121,221,0.3)', // 阴影颜色
                    shadowBlur: 16, // 图形阴影的模糊大小
                    opacity: 1 // 图形透明度
                },
                label: { // 每个节点对应的文本标签样式
                    show: true, // 是否显示标签
                    distance: 8, // 文本距离图形元素的距离
                    position: 'left', // 标签位置
                    verticalAlign: 'middle', // 文字垂直对齐方式，默认自动，top，middle，bottom
                    align: 'center', // 文字水平对齐方式，默认自动，left，right，center
                    fontSize: 16, // 字体大小
                    color: '#333', // 字体颜色
                    backgroundColor: '#F0F5FA', // 文字块的背景颜色
                    borderColor: '#1890FF', // 文字块边框颜色
                    borderWidth: 1, // 文字块边框宽度
                    borderType: 'solid', // 文字块边框描边类型 solid dashed dotted
                    borderRadius: 4, // 文字块的圆角
                    padding: [6, 12], // 文字块内边距
                    shadowColor: 'rgba(0,121,221,0.3)', // 文字块的背景阴影颜色
                    shadowBlur: 6, // 文字块的背景阴影长度
                    width: 200,
                    // 文字超出宽度是否截断或者换行；只有配置width时有效
                    overflow: 'truncate', // truncate截断，并在末尾显示ellipsis配置的文本，默认为...;break换行;breakAll换行，并强制单词内换行
                    ellipsis: '...'
                },
                lineStyle: { // 树图边的样式
                    color: 'rgba(0,0,0,.35)', // 树图边的颜色
                    width: 2, // 树图边的宽度
                    curveness: 0.5, // 树图边的曲度
                    shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
                    shadowBlur: 10 // 图形阴影的模糊大小
                },
                emphasis: { // 树图中图形和标签高亮的样式
                    disabled: false, // 是否关闭高亮状态，默认false
                    // 在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果
                    focus: 'self', // none不淡出其他图形（默认）；self只聚焦当前高亮的数据图形；series聚焦当前高亮的数据所在系列的所有图形；ancestor聚焦所有祖先节点；descendant聚焦所有子孙节点；relative聚焦所有子孙和祖先节点
                    blurScope: 'coordinateSystem', // 开启focus时，配置淡出的范围，coordinateSystem淡出范围为坐标系（默认）；series淡出范围为系列；global淡出范围为全局
                    itemStyle: { // 该节点的样式
                        color: '#1890FF', // 图形的颜色
                        // borderColor: 'rgba(255, 144, 0, 1)', // 图形的描边颜色
                        borderWidth: 1, // 描边线宽，为0时无描边
                        borderType: 'solid', // 描边类型 solid dashed dotted
                        borderCap: 'square', // 指定线段末端的绘制方式butt方形结束，round圆形结束，square
                        shadowColor: 'rgba(0,121,221,0.3)', // 阴影颜色
                        shadowBlur: 12, // 图形阴影的模糊大小
                        opacity: 1 // 图形透明度
                    },
                    lineStyle: { // 树图边的样式
                        color: 'rgba(0,0,0,.45)', // 树图边的颜色
                        width: 2, // 树图边的宽度
                        curveness: 0.5, // 树图边的曲度
                        shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
                        shadowBlur: 6 // 图形阴影的模糊大小
                    },
                    label: { // 高亮标签的文本样式
                        color: '#333',
                        fontWeight: 600
                    }
                },
                blur: { // 淡出状态的相关配置，开启emphasis.focus后有效
                    itemStyle: {}, // 节点的样式
                    lineStyle: {}, // 树图边的样式
                    label: {} // 淡出标签的文本样式
                },
                leaves: { // 叶子节点的特殊配置
                    label: { // 叶子节点的文本标签样式
                        distance: 8,
                        // color: '#1890FF',
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    },
                    itemStyle: {}, // 叶子节点的样式
                    emphasis: {}, // 叶子节点高亮状态的配置
                    blur: {}, // 叶子节点淡出状态的配置
                    select: {} // 叶子节点选中状态的配置
                },
                animation: true, // 是否开启动画
                expandAndCollapse: true, // 子树折叠和展开的交互，默认打开
                animationDuration: 550, // 初始动画的时长
                animationEasing: 'linear', // 初始动画的缓动效果
                animationDelay: 0, // 初始动画的延迟
                animationDurationUpdate: 750, // 数据更新动画的时长
                animationEasingUpdate: 'cubicInOut', // 数据更新动画的缓动效果
                animationDelayUpdate: 0 // 数据更新动画的延迟
            }
        ]
    });
}

const showSettingDrawer = async () => {
    const res = await getManageById({ id: props.id })
    if (res.code === 0 && res.data.manage.a3_affirm !== '') {
        qualityControlData.value = JSON.parse(res.data.manage.a3_affirm)
        setOptions(qualityControlData)
    }
}

const add = () => {
    roamMap(0)
}
const sub = () => {
    roamMap(1)
}

const roamMap = (flag: any) => {
    const currentZoom = treeChart.value.getOption().series[0].zoom // 当前的缩放比例
    let increaseAmplitude = 1.2 // 点击按钮每次 放大/缩小 比例
    if (flag === 1) {
        increaseAmplitude = 0.8
    }
    treeChart.value.setOption({
        series: {
            zoom: currentZoom * increaseAmplitude
        }
    })
}


</script>
<template>
    <div>
        <div :style="`width: ${chartWidth}; height: ${chartHeight};`" ref="chart"></div>
        <div class="zoom-buttons">
            <button class="zoom-in" @click="add">放大</button>
            <button class="zoom-out" @click="sub">缩小</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.menu {
    /*这个样式不写，右键弹框会一直显示在画布的左下角*/
    position: absolute;
    background: rgba(3, 3, 3, 0.6);
    border-radius: 5px;
    left: -99999px;
    top: -999999px;
}

.menu ul {
    list-style: none
}

.menu ul li {
    padding: 5px 10px;
    color: #ffff;
    border-bottom: 1px dashed #ffffff;
    font-size: 14px;
}

.menu ul li:last-child {
    border-bottom: none;
}

.zoom-buttons {
    text-align: center;
    margin-top: 20px;
}

.zoom-buttons button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
    transition: background-color 0.3s;
}

.zoom-buttons button:hover {
    background-color: #0056b3;
}
</style>