<template>
    <div class="price">
        <h1>我们在上面了解了什么是响应式布局，那在我们的实际项目中应该怎么去设计呢？在以往我们设计网站的时候都会受到不同浏览器的兼容性的困扰，还要来个不同尺寸设备，<br/>
            我们该怎么淡定下来呢？有需求就会有解决方案，说到响应式布局，就不得不提起CSS3中的Media Query（媒介查询），这可是个好东西，易用、强大、快捷……Media Query是制作响应式布局的一个利器，<br/>
            使用这个工具，我们可以非常方便快捷的制造出各种丰富的实用性强的界面。接下来就一起来深入的了解Media Query。<br/>
            1、CSS3中的Media Query（媒介查询）是什么？ [1]<br/>
            通过不同的媒介类型和条件定义样式表规则。媒介查询让CSS可以更精确作用于不同的媒介类型和同一媒介的不同条件。媒介查询的大部分媒介特性都接受min和max用于表达”大于或等于”和”小于或等于”。<br/>
            如：width会有min-width和max-width媒介查询可以被用在CSS中的@media和@import规则上，也可以被用在HTML和XML中。通过这个标签属性，我们可以很方便的在不同的设备下实现丰富的界面，<br/>
            特别是移动设备，将会运用更加的广泛。
            2、media query能够获取哪些值？
            设备的宽和高device-width，device-height显示屏幕/触觉设备。
            渲染窗口的宽和高width，height显示屏幕/触觉设备。
            设备的手持方向，横向还是竖向orientation（portrait|lanscape）和打印机等。<br/>
            画面比例aspect-ratio点阵打印机等。
            设备比例device-aspect-ratio-点阵打印机等。
            对象颜色或颜色列表color，color-index显示屏幕。
            设备的分辨率resolution。
            3、语法结构及用法
            @media 设备名 only （选取条件） not （选取条件） and（设备选取条件），设备二{sRules}
            示例一：在link中使用@media：
            上面使用中only可省略，限定于计算机显示器，第一个条件max-width是指渲染界面最大宽度，第二个条件max-device-width是指设备最大宽度。<br/>
            示例二：在样式表中内嵌@media：
            @media ( min-device-width:1024px ) and ( max-width:989px )，screen and ( max-device-width:480px )，( max-device-width:480px ) and ( orientation:landscape )，
            ( min-device-width:480px ) and ( max-device-width:1024px ) and ( orientation:portrait ) {srules}<br/>
            在示例二中，设置了电脑显示器分辨率（宽度）大于或等于1024px（并且最大可见宽度为989px）；屏宽在480px及其以下手持设备；屏宽在480px以及横向（即480尺寸平行于地面）放置的手持设备；
            屏宽大于或等于480px小于1024px以及垂直放置设备的css样式。<br/>
            从上面的例子可以看出，字符间以空格相连，选取条件包含在小括号内，srules为兼容设置的样式表，包含在中括号里面。only（限定某种设备，可省略），and（逻辑与），not（排除某种设备）为逻辑关键字，
            多种设备用逗号分隔，这一点继承了css基本语法。
        </h1>
    </div>
</template>