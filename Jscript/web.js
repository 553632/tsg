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
        //高级搜索
        $("jbs").className = "";
        $("gjs").className = "norhi";
        $("nSearch").style.display = "none";
        $("hSearch").style.display = "";
    }
}
//期刊还是图书
function qkorbk(x)
{
    $("ctype").innerHTML = x;
    var v = parseInt($("jborgj").innerHTML);
    //alert(x);
    //图书
    if(x==1)
    {
        $("bkquery").className = "qkorbk";
        $("qkquery").className = "";
        $("qkstype").style.display = "none";
        $("stype").style.display = ""; 
        if(v==1)
        {
            //alert("图书基本");
           $("fName").innerHTML = "BookSearch.aspx?c=1";
            $("qikan").style.display="none";
            $("book").style.display="";
            $("qkexpdate").style.display = "none";
            $("expdate").style.display = "";
            
        }
        else
        {
        //alert("图书高级");
            $("fName").innerHTML = "BookSearch.aspx?c=2";
            $("qikan").style.display="none";
            $("book").style.display="";            
        }
    }
    else
    {
    //期刊
        $("bkquery").className = "";
        $("qkquery").className = "qkorbk";
        $("qkstype").style.display = "";
        $("stype").style.display = "none"; 
        if(v==1)
        {
        //alert("期刊基本");
            exISBN('test');
            $("fName").innerHTML = "MagazineSearch.aspx?c=1";
            $("qikan").style.display="";
            $("book").style.display="none";
            $("expdate").style.display = "none";
            $("qkexpdate").style.display = "";   
        }
        else
        {
            //alert("期刊高级");
            $("fName").innerHTML = "MagazineSearch.aspx?c=2";
            $("qikan").style.display="";
            $("book").style.display="none";
        }

     }
    //displayNone($("qkstype"));
   // displayNone($("stype"));
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
    var stype = "";
    var c = parseInt($("ctype").innerHTML);
    var url = $("fName").innerHTML;
    var expdate = 0;
    
    if(c==1)
    {
        expdate = $("expdate").value;
        stype = $("stype").value;
    }
    else
    {
        expdate = $("qkexpdate").value;
        stype = $("qkstype").value;
     }   
    url += "&stype=" + stype;
    url += "&w=" + toUTF8($("w").value);
    url += "&tj=" + getSelVal();
    url += "&d=" + expdate;
    window.location = url;  
}

//高级搜索
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
//期刊高级检索
function qkhSearch()
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
        $("tj2").checked = true;
        $("tj1").disabled = true;
        $("tj3").disabled = true;
        $("tj4").disabled = true;

    }
    else
    {
    
        $("tj1").disabled = false;
        $("tj1").checked = true;
        $("tj3").disabled = false;
        $("tj4").disabled = false;
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
//隐藏
function displayNone(o)
{
    if(o.style.display=="none")
    {
        o.style.display = "";
    }
    else
    {
        o.style.display = "none";
    }
}