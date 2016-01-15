// 系统检索JS

//基本检索
function Search()
{
    if($("w").value=="")
    {
        alert('请输入关键字！');
        $("w").focus();
       return;
    }
    var expdate = $("expdate").value;
    var url = "BookSearch.aspx?c=1";
    url += "&stype=" + $("stype").value;
    url += "&w=" + toUTF8($("w").value);
    url += "&tj=" + getSelVal();
    url += "&d=" + expdate;
    window.location = url;  
}
//基本还是高级搜索
function searchType(v)
{
    $("jborgj").innerHTML = v;
    //基本搜搜
    if(v==1)
    {
        $("jbs").className = "norhi";
        $("gjs").className = "";
        $("nSearch").style.display = "";
        $("hSearch").style.display = "none";
    }
    else
    {
        $("jbs").className = "";
        $("gjs").className = "norhi";
        $("nSearch").style.display = "none";
        $("hSearch").style.display = "";
    }
}
function hSearch()
{
    var isbn = $("isbn").value;
    var ztm = $("ztm").value;
    var cbs = $("cbs").value;
    var zrz = $("zrz").value;
    var ztc = $("ztc").value;
    var cbn = $("cbn").value;
    if(isbn=="" && ztm=="" && cbs=="" && zrz=="" && ztc=="" && cbn=="")
    {
        alert('请至少输入一个检索条件！');
        $("isbn").focus();
        return;
    }
    var url = "BookSearch.aspx?c=2";
    if(isbn!="")
        url += "&isbn=" + isbn;
    if(ztm!="")
        url += "&ztm=" + toUTF8(ztm);
    if(cbs!="")
        url += "&cbs=" + toUTF8(cbs);
    if(zrz!="")
        url += "&zrz=" + toUTF8(zrz);
    if(ztc!="")
        url += "&ztc=" + toUTF8(ztc);
    if(cbn!="")
        url += "&cbn=" + toUTF8(cbn);
    window.location = url;
}
//获取检索方式
function getSelVal() 
{ 
    var obj; 
    obj = document.getElementsByName("tj"); //select就是你定义的那个radio 

    for(var i=0;i<obj.length;i++) 
    { 
        if(obj[i].checked == true) 
        { 
            return obj[i].value; //返回选中的值 
            break; //退出for循环 
        } 
    } 
} 


//判断是否是ISBN码
function exISBN(v)
{
return;

//    if(v.indexOf('ISBN')>=0)
//    {
//        $("tj2").checked = true;
//        $("tj1").disabled = true;
//        $("tj3").disabled = true;
//        $("tj4").disabled = true;

//    }
//    else
//    {
//    
//        $("tj1").disabled = false;
//        $("tj1").checked = true;
//        $("tj3").disabled = false;
//        $("tj4").disabled = false;
//    }
}

//TO UTF8
function toUTF8(szInput){ 
 var wch,x,uch="",szRet="";
 for (x=0; x<szInput.length; x++){
  wch=szInput.charCodeAt(x);
  if (!(wch & 0xFF80)){
   szRet += szInput.charAt(x);
  }
  else if (!(wch & 0xF000)){
   uch = "%" + (wch>>6 | 0xC0).toString(16) + 
      "%" + (wch & 0x3F | 0x80).toString(16);
   szRet += uch; 
  }
  else{
   uch = "%" + (wch >> 12 | 0xE0).toString(16) + 
      "%" + (((wch >> 6) & 0x3F) | 0x80).toString(16) +
      "%" + (wch & 0x3F | 0x80).toString(16);
   szRet += uch; 
  }
 }
 return(szRet);
}