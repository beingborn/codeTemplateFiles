"use strict";

$(document).ready(function(){

  // 레이어 팝업 공통 닫기버튼 클릭이벤트
  var $popClose = $(".layer_popup_wrap.cdj_renew .layer_box_new .btn_close, .layer_popup_wrap.cdj_renew .layer_box_new .layer_close");

  $popClose.click(function(){
    $(this).parents(".layer_popup_wrap.cdj_renew").hide();
    bodyScrollLock();
    return false;
  });

  //레이어 팝업 오픈 시 body scroll 방지
  function bodyScrollLock(){
    var $cdjLayer = $(".layer_popup_wrap");

    if($cdjLayer.is(":visible")){
      $("body").addClass("modal_open");
    } else {
      $("body").removeClass("modal_open");
    }
  }
  



/*
  //쿠폰선택 팝업 checked 이벤트 (lg제휴 쿠폰 레이어팝업 포함)
  var $couponList = $(".layer_popup_wrap.cdj_renew .coupon_layer .coupon_list input:radio");
  var $liBox = $(".layer_popup_wrap.cdj_renew .coupon_layer .coupon_list li");
  var $fstLabel = $(".layer_popup_wrap.cdj_renew .coupon_layer .coupon_list li:first-child label");
  var $label = $(".layer_popup_wrap.cdj_renew .coupon_layer .coupon_list label");

  $couponList.change(function(){
    $couponList.each(function(){

      var checked = $(this).prop('checked');
      var $boxBorder = $(this).parent(".check_wrap").parent("li");
      var $thisLabel = $(this).next("label");

      if(checked){
        $label.css('color' , '#333');
        $fstLabel.css('color' , '#999');
        $liBox.css('border-color' , '#ddd');
        $boxBorder.css('border-color','#6C801A');
        $thisLabel.css('color' , '#6C801A');
      }

    });
  });
*/
  
  //쿠폰 레이어팝업 라디오버튼 change 이벤트
  var $couponList = $("#layer_coupon .coupon_layer .coupon_list input:radio");
  $couponList.change(function(){
	  fnCouponListCheck('layer_coupon');
  });
  
  //멤버십 레이어팝업 라디오버튼  change 이벤트
  var $membershipList = $("#layer_membership .coupon_layer .coupon_list input:radio");
  $membershipList.change(function(){
	  fnCouponListCheck('layer_membership');
  });
  
  
  //선물받기 최초화면 비회원 정보입력란 on off
  var $nonmemAddress = $(".cdj_renew.receive_present_wrap.first button.nonmem_address");
  var $logInBtn = $(".cdj_renew.receive_present_wrap.first button.login_btn");
  var $nonMemAddrInpt = $(".cdj_renew.receive_present_wrap.first .nonmem_address_input")

  $nonmemAddress.click(function(){
    $(this).hide();
    $(this).parent(".btn_wrap").removeClass("btn_typeB");
    $(this).parent(".btn_wrap").addClass("on btn_typeA");
    $(this).next(".login_btn").removeClass("ptBtn btn_w50");
    $(this).next(".login_btn").addClass("btn_w100");

    $nonMemAddrInpt.show();
  });
  



});

//쿠폰 선택 팝업(layer_coupon), 멤버십 할인 선택 팝업(layer_membership)이벤트 
function fnCouponListCheck(layerId){
	
	var $objList = $("#"+layerId+" .coupon_layer .coupon_list input:radio");
	var $liBox = $("#"+layerId+" .coupon_layer .coupon_list li");
	var $fstLabel = $("#"+layerId+" .coupon_layer .coupon_list li:first-child label");
	var $label = $("#"+layerId+" .coupon_layer .coupon_list label");
	  
	$objList.each(function(){
		var checked = $(this).prop('checked');
		var $boxBorder = $(this).parent(".check_wrap").parent("li");
		var $thisLabel = $(this).next("label");
		if(checked){
			$label.css('color' , '#333');
			$fstLabel.css('color' , '#999');
			$liBox.css('border-color' , '#ddd');
			$boxBorder.css('border-color','#6C801A');
			$thisLabel.css('color' , '#6C801A');
		}
	});
}

//(개발) 공통 ALERT 레이어 팝업
function fnLayerAlert(textHtml, callback){
	$('#layer_alert .text_box').html(textHtml);
	$('#layer_alert').show();	
	$('#btn_alert_ok').off("click").on("click", (function(){
		callback();
		$('#layer_alert').hide();	
	}));
}

//(개발) 공통 confirm 레이어 팝업
function fnLayerConfirm(textHtml, callback){
	$('#layer_confirm .text_box').html(textHtml);
	$('#layer_confirm').show();
	$('#btn_confirm_ok').off("click").on("click", (function(){
		callback(true);
		$('#layer_confirm').hide();	
	}));
	$('#btn_confirm_cancel').off("click").on("click", (function(){
		callback(false);
		$('#layer_confirm').hide();	
	}));
}
