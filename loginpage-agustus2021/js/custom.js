$(document).ready(function(){$("#voucher").click(function(){$("#username").attr("placeholder","Kode Voucher"),$("#password").attr("readonly","readonly"),$("#password").attr("placeholder","••••••••"),$("#password").remoteAttr("required"),$("#voucher").attr("class","btn btn-info active"),$("#member").attr("class","btn btn-success")}),$("#member").click(function(){$("#username").attr("placeholder","Nama Pengguna"),$("#password").removeAttr("readonly"),$("#password").attr("placeholder","Kata Sandi"),$("#password").attr("required","required"),$("#voucher").attr("class","btn btn-info"),$("#member").attr("class","btn btn-success active")})});