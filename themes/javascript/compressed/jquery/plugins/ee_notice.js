/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2015, EllisLab, Inc.
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.0
 * @filesource
 */
/*!
 * ExpressionEngine JS Notification Plugin
 *
 * @package		ExpressionEngine
 * @subpackage	Control Panel
 * @category	Control Panel
 * @author		EllisLab Dev Team
 * @link		http://ellislab.com
 */
!function(n){function t(){var t=n("#notice_counts");_={error:{count:0,last:"",counter:t.find(".notice_error").get(0)},alert:{count:0,last:"",counter:t.find(".notice_alert").get(0)},success:{count:0,last:"",counter:t.find(".notice_success").get(0)}},f=n("#notice_texts_container"),t.find("span").click(a)}function e(){"safari"!=!n.browser&&setTimeout(function(){window.scrollBy(0,1),window.scrollBy(0,-1)},15)}function i(){n("#notice_flag").css("display","inline"),o(l.type,r.count+1)}function o(t,i){if(_[t]){_[t].count=i;var o=_[t].counter;3==o.lastChild.nodeType&&o.removeChild(o.lastChild),0==i?(_[t].last="",n(o).hide()):(o.innerHTML+="&nbsp;&nbsp;"+i,n(o).show(),e())}}function c(n){d!=n&&(f.find(".notice_texts").hide().end().find(".notice_"+n).show(),f.slideDown("fast",e),d=n,r&&u(r.counter)),l.close_on_click&&(f.data("close_bound")||(f.data("close_bound",!0),f.click(function(){f.one("mouseout",s)})))}function s(){f.slideUp("fast",function(){f.find(".notice_texts").html(""),n.each(_,function(n){o(n,0)}),n("#notice_flag").hide(),n("#active_notice").attr("id",""),d=!1})}function a(){var n=this.className.substr(7);return"info"==n?p():(c(n),u(this),!1)}function u(t){n("#active_notice").attr("id",""),t.id="active_notice"}var r,f,l,d,_={},p=function(){};n.ee_notice=function(e,o){if(f||t(),o=o||{},n.isArray(e))return void n.each(e,function(t,e){n.ee_notice(e.message,n.extend(o,e))});if(l=n.extend({type:"notice",open:!1,close_on_click:!0},o),"notice"==l.type&&(l.type="alert"),r=_[l.type]){i();var s=n(".notice_texts.notice_"+l.type);if(r.last==e){var a=s.children().slice(-1),u=a.find(".subcount");u.length?u.text(parseInt(u.text())+1):a.prepend('<span class="subcount">2</span>')}else s.append("<p>"+e+"</p>"),r.last=e}else{if("custom"!=l.type)throw"Invalid notification type.";n(".notice_texts.notice_custom").html(e)}return("error"==l.type||l.open)&&c(l.type),n.ee_notice},n.ee_notice.destroy=function(){f&&s()},n.ee_notice.show_info=function(i){f||t(),n("#notice_flag").css("display","inline"),n(".notice_info").show(),p=i,e()},n.ee_notice.hide_info=function(){n(".notice_info").hide();var t=0;n.each(_,function(n,e){t+=e.count}),t||n("#notice_flag").hide()}}(jQuery);