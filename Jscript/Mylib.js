// JScript 文件
var o = null;
var curPage = 1;
function showStyle(o)
{
    $("a1").style.cssText = "cursor:pointer; ";
    $("a2").style.cssText = "cursor:pointer; ";
    $("a3").style.cssText = "cursor:pointer; ";
    o.style.cssText = "cursor:pointer; color:#0054b3; height:27px; line-height:25px; width:70px; margin-top:2px; background:url(Images/business_hover.gif); text-decoration:none;";
}
function getMyLibInfo(type)
{
    var cur;
    $("cType").innerHTML = type;
    o = new OpStateClass();
    if (type != 3) 
    {
        o.start();
        $("page").style.display = "none";
    }
    else 
    {
        $("page").style.display = "block";
        cur = 1;// parseInt($("ctl00_ContentPlaceHolder1_maxPageIndex").innerText);
    }
    execQuery(cur);
    //setTimeout("execQuery()",100);
}
function execQuery(cur)
{
    var cType = parseInt($("cType").innerHTML);
    //var sType = parseInt($("sType").value);
    var rid = $("ctl00_ContentPlaceHolder1_rdId").innerHTML;
    if (cType == 3) 
    {
        var maxPageIndex = parseInt($("ctl00_ContentPlaceHolder1_maxPageIndex").innerText);
        if (cur < 1) 
        { 
         cur = 1; 
        }
        else if (cur > maxPageIndex) 
        {
            cur = maxPageIndex;
        } 
    }
    var res = qjbopac.MyLib.GetRightList(cType, rid, cur);
    if(res.error) return showAjaxProError(res.error);
    $("ctl00_ContentPlaceHolder1_tbList").innerHTML = "";
    $("ctl00_ContentPlaceHolder1_tbList").innerHTML = res.value[0];
    if (cType == 3) 
    {
        $("ctl00_ContentPlaceHolder1_cPage").value = res.value[1];
        $("ctl00_ContentPlaceHolder1_maxPageIndex").innerText = res.value[2];
        return;
    }
    if(o.isLoading)
        o.close();
}

//取消预借
function CancelBorrowPre(bk_id,zl_kind)
{
    if(confirm('确认撤销当前的'+ zl_kind + '预借吗？'))
    {
        var res = qjbopac.MyLib.CancelBorrowPre(bk_id,zl_kind);
        if(res.error) return showAjaxProError(res.error);
        if(res.value == true)
        {
            //刷新客户端信息
            var res1 = qjbopac.MyLib.RefreshClientDis(2);
            if(res1.error) return showAjaxProError(res1.error);
            $("ctl00_ContentPlaceHolder1_rdBorrowpre").innerHTML = res1.value[0];
            $("ctl00_ContentPlaceHolder1_tbList").innerHTML = res1.value[1];
    
            alert('撤销成功');
        }
        else
        {
            alert('撤销失败');
        }
    }
    else
    {
        return;
    }
}


//图书续借
function bookXJ(bkid,zlkind,d)
{
    if(confirm('确认续借当前的'+ zlkind + '吗？'))
    {
        var res = qjbopac.MyLib.BorrowContinue(bkid,zlkind,d);
        if(res.error) return showAjaxProError(res.error);
        if(res.value == true)
        {
            //刷新客户端信息
            var res1 = qjbopac.MyLib.RefreshClientDis(1);
            if(res1.error) return showAjaxProError(res1.error);
            $("ctl00_ContentPlaceHolder1_rdBorrowpre").innerHTML = res1.value[0];
            $("ctl00_ContentPlaceHolder1_tbList").innerHTML = res1.value[1];
    
            alert('续借成功');
        }
        else
        {
            alert('续借失败');
        }
    }
    else
    {
        return;
    }
}


//刷新照片
function RefreshreaderPicjs()
{
    var readerid_temp = $("ctl00_ContentPlaceHolder1_rdId").innerHTML;    
    qjbopac.MyLib.RefreshReaderPic(readerid_temp);    
    window.location.reload();
}

//登录
function mylogin()
{
    var xuname = $("myuname").value;
    var xpwd = $("myupwd").value;
    if(xuname=="" || xpwd=="")
    {
        alert('读者编号和密码不能为空！');
        $("myuname").focus();
        return;
    }
    var res = qjbopac.MyLib.readerLogin(xuname,xpwd);
    if(res.error) return showAjaxProError(res.error);
    if(res.value == true)
    {
       window.location.reload();
    }
    else
    {
        alert('登录失败，读者编号或密码错误！');
        $("myuname").select();
        $("myuname").focus();
    }
}
//修改密码
function changepwd()
{
    var op = $("oldPass").value;
    var np1 = $("newPass1").value;
    var np2 = $("newPass2").value;
    if(op=="")
    {
        alert('请输入原密码！');
        $("oldPass").focus();
        return;
    }
    if(np1=="")
    {
        alert('请输入新密码！');
        $("newPass1").focus();
        return;
    }
    if(np2=="")
    {
        alert('请再次输入新密码！');
        $("newPass2").focus();
        return;
    }
    if(np1!=np2)
    {
        alert('两次输入的新密码不一致！');
        $("newPass1").select();
        $("newPass1").focus();
        return;
    }
    var res = qjbopac.MyLib.ModifyPass(op,np1);
    if(res.error) return showAjaxProError(res.error);
    if(res.value == true)
    {
        alert('密码修改成功，请重新登录！');
        window.location = "Logout.aspx?url=MyLib.aspx";
        return;
    }
    else
    {
        alert('密码修改失败，请稍后再试！');
        return;
    }
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

function checkNum(oEvent) {    
    var cPage = $("ctl00_ContentPlaceHolder1_cPage");
    if (oEvent.keyCode == 13) {
        execQuery(parseInt(cPage.value));
    } 
    cPage.value=cPage.value.replace(/\D/g,'');
}

function replaceChar(oEvent) {
    var cPage = $("ctl00_ContentPlaceHolder1_cPage");
    cPage.value = cPage.value.replace(/\D/g, '');
}