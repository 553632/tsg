// 系统检索JS
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
    var url = "MagazineSearch.aspx?c=1";
    url += "&stype=" + $("stype").value;
    url += "&w=" + toUTF8($("w").value);
    url += "&tj=" + getSelVal();
    url += "&d=" + expdate;
    window.location = url;  
}
function hSearch()
{
    var issn = $("issn").value;
    var dak = $("dak").value;
    var zzs = $("zzs").value;
    var qkm = $("qkm").value;
    if(issn=="" && dak=="" && zzs=="" && qkm=="")
    {
        alert('请至少输入一个检索条件！');
        $("issn").focus();
        return;
    }
    var url = "MagazineSearch.aspx?c=2";
    if(issn!="")
        url += "&issn=" + issn;
    if(dak!="")
        url += "&dak=" + toUTF8(dak);
    if(zzs!="")
        url += "&zzs=" + toUTF8(zzs);
    if(qkm!="")
        url += "&qkm=" + toUTF8(qkm);
    window.location = url;
}
//判断是否是ISBN码
function exISBN(v)
{
    if(v.indexOf('ISBN')>=0)
    {
        $("tj").value = "3";
        $("tj").disabled = true;
    }
    else
    {
        $("tj").value = "1";
        $("tj").disabled = false;
    }
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
