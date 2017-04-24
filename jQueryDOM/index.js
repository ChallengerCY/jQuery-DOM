/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#bid1").click(function(){
        alert("text:"+$("#pid1").text()); //获取文本
    })
    $("#bid2").click(function(){
        alert("text:"+$("#pid1").html()); //获取当前标签中的所有信息
    })
    $("#bid3").click(function(){
        alert("text:"+$("#iid").val()); //获取当前标签中的所有信息
    })
    $("#bid4").click(function(){
        alert("text:"+$("#aid").attr("href")); //获取当前标签中的所有信息
    })
})