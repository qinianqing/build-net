/**
 * Created by Administrator on 2016/9/3.
 */
$(function () {
    var json = [
        {src: "images/al-con1.jpg", title: "��վ���", name: "�����ۿ���ٷ���վ����", style: "���й�˾���ٷ���վ��ŷ�����"},
        {src: "images/al-con2.jpg", title: "��վ���", name: "̽·��H5��վ������Ŀ", style: "���й�˾ , ����������վ���� , ��ɫ , ŷ�����"},
        {src: "images/al-con3.jpg", title: "��վ���", name: "��Զ���ʺ�����վ���", style: "������ҵ , ��ɫ , ŷ����� , ���й�˾"}
    ];
    var str = "";
    for (var i = 0; i < json.length; i++) {
        str += '<div class="al-left al-r">'
            + '<div class="al-image-effect-future">'
            + '<div class="al-share-layer">'
            + '<a href="#" class="al-share-button al-share-via">����</a>'
            + '</div>'
            + '<div class="al-image-layer"><img src="' + json[i].src + '">'
            + '</div>'
            + '</div>'
            + '<div class="al-left-con">'
            + '<a href="javascript:;" class="al-left-a">'
            + '<p>' + json[i].title + '</p>'
            + '<p class="al-p-con">' + json[i].name + '</p>'
            + '<p>' + json[i].style + '</p>'
            + '</a>'
            + '<a href="javascript:;" class="al-left-at">'
            + '<p>' + json[i].title + '</p>'
            + '<p class="al-p-con">' + json[i].name + '</p>'
            + '<p>' + json[i].style + '</p>'
            + '</a>'
            + '</div>' + '</div>';
    }
    $(".al-content").html(str);
    $(".al-left").eq(2).css("marginRight", "0");
    $(".al-left").mouseenter(function () {
        $(this).find(".al-left-at").stop().slideDown(200);
    })
    $(".al-left").mouseleave(function () {
        $(this).find(".al-left-at").stop().slideUp(200);
    })
})