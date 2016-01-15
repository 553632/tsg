<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="ReaderGuide.aspx.cs" Inherits="qjbopac.ReaderGuide" Title="读者指南" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="TitleList">
        <div id="TitleListContent">
            <ul id="getAnnList" runat="server">
            </ul>
        </div>
        <div style="margin:10px;">
             <div style="display:none" id="serverPage" runat="server"></div>
             <div id="page">
    	        <ul>
    	            <li>转到第<input id="cPage" name="cPage" runat = "server" onkeypress="checkNum(event);" type="text" />/<span id="maxPage" runat="server"></span>页</li>
    	            <li id="next" onclick="query(curPage + 1);"></li>
    	            <li id="previous" onclick="query(curPage - 1);"></li>
    	            <li style="margin-right:10px; margin-left:10px;"><span><img src="Images/10.gif" alt="10条" onclick="chanagePage(10);" title="10条" /></span><span style="margin-left:2px; margin-right:2px;"><img src="Images/25.gif" alt="25条" onclick="chanagePage(25);" title="25条" /></span><span><img src="Images/50.gif" alt="50条" onclick="chanagePage(50);" title="50条" /></span></li>
    	            <li>
		                <div>    
                            <select id="setPage" name="setPage" onchange="query(curPage);$('w').focus();" style="display:none;" class="selectlabel_page">
                                 <option value="5" selected="selected">默认显示</option>
                                 <option value="10">10条/页</option>
                                 <option value="20">20条/页</option>
                                 <option value="50">50条/页</option>                        
                            </select>
    		                <span id="showPageSize" runat="server" style="display:none;"></span>
    	                </div>
    	            </li>
    	            <li><div class="a" >共 <span id="numSize" runat="server"></span> 条</div></li>
                </ul>
            </div>
            <div id="queryName" runat="server" style="display:none;">Type</div>
            <div id="key" style="display:none;">2</div>
         </div>    
    </div>
<script language="javascript" type="text/javascript" src="Jscript/Page.js"></script>
<script type="text/javascript" language="javascript">
function ChanagePage(page)
{
    if(page<1)
        page = 1;
    if(page>max)
           page = max;
    var x = 0;
    
    var pagesize = parseInt($('setPage').value);
    //if(pagesize<=MaxPageSize)
    //    pagesize = MaxPageSize;        
    var queryName = $('ctl00_ContentPlaceHolder1_queryName').innerHTML;
    var key = $('key').innerHTML;
    //alert(pagesize);
    var res = qjbopac.ReaderGuide.ShowBookList(page,pagesize,'l_type=12');
    
    if(!(res.value==null))
    {
         $('ctl00_ContentPlaceHolder1_getAnnList').innerHTML = res.value[0]; //显示数据         
        
         $('ctl00_ContentPlaceHolder1_maxPage').innerHTML = res.value[1];
         max = res.value[1];
         $('ctl00_ContentPlaceHolder1_numSize').innerHTML = res.value[2];
         
         if (page>max) page=max;
         $('ctl00_ContentPlaceHolder1_cPage').value = page;  //当前页
         curPage = page;
         
         //关闭加载
         if(isLoading)
         {
	        setTimeout("xcloseMsgShow()",100);
	        isLoading = false;
         }

    }
    else
    {
       $('tbList').innerHTML = "<br><br>没有信息！";
      
    }
 
}
//换页
function chanagePage(v)
{
    $("setPage").value = v;
    query(curPage);
    $('w').focus();
}

query(curPage);
</script>
</asp:Content>
