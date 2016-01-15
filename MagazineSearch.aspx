<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="MagazineSearch.aspx.cs" Inherits="qjbopac.MagazineSearch" Title="期刊检索" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="search">
	<div class="chooseSearch">  
	    <div class="chooseSearchContent">
	        <div class="chooseSearchTitle">
	            <ul>
	                <li><a class="norhi" id="jbs" style="cursor:pointer;" onclick="searchType(1)" >基本检索</a></li>
	                <li><a id="gjs" style="cursor:pointer;" onclick="searchType(2)">高级检索</a></li>
	            </ul>
	        </div>    
	        <div class="searchBox">    
        	    <div id="nSearch">
        	        <div class="searchInputBox">
    	                <span style="float:left;"><input name="w" class="searchBoxInput" id="w" onkeyup="if(event.keyCode==13) Search();" type="text" /></span>
    	                <span style="float:right; *margin-top:1px; cursor:pointer;"><img src="Images/search.png" alt="检索" title="检索" onclick="Search();" /></span>
        	        </div>
                    <div class="searchBoxContent">
                    	<span>请选择检索范围：</span>
                        <span>
                        	<select name="expdate" id="expdate">
                                <option value="0" selected="selected">全部的期刊</option>
                                <option value="3">最近三天的新期刊</option>
                                <option value="7">最近一周的新期刊</option>
                                <option value="30">最近一月的新期刊</option>
                            </select>
                        </span>
                    </div>
                    <div class="searchBoxContent">
                        <span>请选择检索类型：</span>
                        <span><select name="stype" id="stype">
                                <option value="tb_infomagz.qk_issn">ISSN码</option>
                                <option value="tb_infomagz.qk_name" selected="selected">期刊名称</option>
                                <option value="tb_infomagz.qk_subname">并列题名</option>
                                <option value="tb_infomagz.qk_auth">主编信息</option>
                                <option value="tb_infomagz.qk_class">分类号</option>
                                <option value="tb_infomagz.prs_nme">发行单位</option>
                                <option value="tb_infomagz.qk_keyname">主题词</option>
                                <option value="tb_magzstore.place">索取号</option>
                                <option value="tb_magzstore.barid">条码号</option>
                                <option value="tb_infomagz.qk_yfdh">邮发代号</option>
                            </select>
                        </span>
                    </div>
                    <div class="searchBoxContent">
                        <span>请选择检索模式：</span>
                        <span><input name="tj" id="tj1" type="radio" checked="checked" value="1" />任意匹配</span>
                        <span><input name="tj" id="tj2" type="radio" value="3" />完全匹配</span>
                        <span><input name="tj" id="tj3" type="radio" value="4" />前方一致</span>
                        <span><input name="tj" id="tj4" type="radio" value="5" />后方一致</span>
    		        </div>
    		    </div>
    		    <div class="searchBoxTable" id="hSearch" style="display:none;">
                    <table id="qikan">
       	                <tr>
            	                <td class="inputName">ISSN</td>
                                <td><input id="issn" type="text" /></td>
                                <td class="inputName">期刊名称</td>
                                <td><input id="qkm" type="text" /></td>

                            </tr>
                            <tr>
            	                <td class="inputName">发行单位</td>
                                <td><input id="zzs" type="text" /></td>
                                <td class="inputName">邮发代号</td>
                                <td><input id="dak" type="text" /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr><td colspan="4"><div class="resetBtn" onclick="reset()"></div><div class="searchBtn" onclick="hSearch();"></div></td></tr>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
</div>
<span style="display:none;" id="jborgj">1</span>
<div id="searchContent">
	<h4>检索结果</h4>
	<div id="tbList">
	<div id="error" runat="server"></div>
        <asp:GridView ID="GridView1" runat="server"  AutoGenerateColumns="False" >
            <HeaderStyle/>
            <Columns>
                <asp:TemplateField HeaderText="序号">
                <ItemTemplate><%#number++%></ItemTemplate>
                    <ItemStyle Width="5%" />
                    <HeaderStyle Width="5%" />
                </asp:TemplateField>
                <asp:BoundField DataField="bkisbn" HeaderText="ISSN" SortExpression="qk_id">
                    <ItemStyle Width="15%"/>
                    <HeaderStyle/>
                </asp:BoundField>
            <asp:TemplateField HeaderText="期刊名称">
                <ItemTemplate>
                    <%#Eval("bkname")%>
                </ItemTemplate>
            <HeaderStyle/>
            </asp:TemplateField>
                <asp:BoundField DataField="bkauth" HeaderText="主编信息">
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="prsname" HeaderText="发行单位">
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="pubtime" HeaderText="刊期号">
                    <HeaderStyle/>
                </asp:BoundField>                
                <asp:BoundField DataField="libtotle" HeaderText="总馆藏">
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="libin" HeaderText="可外借">
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:TemplateField HeaderText="操作">
                    <ItemTemplate>
                        <a href="MagazineContentPage.aspx?Id=<%#Eval("bkid")%>" target="_blank">查看详细</a>                        
                    </ItemTemplate>
                    <HeaderStyle/>
                </asp:TemplateField>
            </Columns>
            <AlternatingRowStyle CssClass="tr_1"/>
        </asp:GridView>
    </div>
    <div style="display:none" id="serverPage" runat="server"></div>
    <div id="page">
    	<ul>
    	    <li>转到第<input id="cPage" name="cPage" runat = "server" onkeypress="checkNum(event);" type="text" />/<span id="maxPage" runat="server"></span>页</li>
    	    <li id="next" onclick="query(curPage + 1);"></li>
    	    <li id="previous" onclick="query(curPage - 1);"></li>
    	    <li style="margin-right:10px; margin-left:10px;"><span><img src="Images/10.gif" alt="10条" onclick="chanagePage(10);" title="10条" /></span><span style="margin-left:2px; margin-right:2px;"><img src="Images/25.gif" alt="25条" onclick="chanagePage(25);" title="25条" /></span><span><img src="Images/50.gif" alt="50条" onclick="chanagePage(50);" title="50条" /></span></li>
    	    <li>
		        <div class="a" >    
                    <select id="setPage" name="setPage" onchange="query(curPage);$('w').focus();" style="display:none;" class="selectlabel_page">
                         <option value="10" selected="selected">默认显示</option>
                         <option value="25">25条/页</option>
                         <option value="50">50条/页</option>
                         <option value="100">100条/页</option>                        
                    </select>
    		        <span id="showPageSize" runat="server" style="display:none;">25</span>
    	        </div>
    	    </li>
    	    <li><div class="a" >命中数 <span id="numSize" style="color:Red;" runat="server"></span></div></li>
        </ul>
    </div>
    <div id="queryName" runat="server" style="display:none;"></div>
    <div id="key" style="display:none;">1</div>
        <div style="display:none;">
        <span id="jbKey" runat="server"></span>
        <span id="jbExp" runat="server">0</span>
        <span id="jbSearchType" runat="server">tb_infomagz.qk_name</span>
        <span id="jbSearchMode" runat="server">1</span>
        <span id="JBSearchOrgj" runat="server">1</span>
        <span id="GJissn" runat="server"></span>
        <span id="GJqkm" runat="server"></span>
        <span id="GJzzs" runat="server"></span>
        <span id="GJdak" runat="server"></span>

    </div>
</div>
<script language="javascript" type="text/javascript" src="Jscript/Page.js"></script>
<script language="javascript" src="Jscript/magweb.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript">
function ChanagePage(page)
{
    if(page<1)
        page = 1;
    if(page>max)
           page = max;
    var x = 0;
    
    var pagesize = parseInt($('setPage').value);
//    if(pagesize<=MaxPageSize)
//        pagesize = MaxPageSize;        
    var queryName = $('ctl00_ContentPlaceHolder1_queryName').innerHTML;
    if(queryName=="")
    {
         if(isLoading)
         {
	        setTimeout("xcloseMsgShow()",1);
	        isLoading = false;
         }
        return;
    }
    //var key = $('key').innerHTML;
    //alert(pagesize);
    //var res = _BookSearch.showBookList2(page,pagesize,queryName,key);
    var res = qjbopac.MagazineSearch.ShowBookList(page,pagesize,'',queryName);
    
    if(!(res.value==null))
    {
         $('tbList').innerHTML = res.value[0]; //显示数据
         
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
function init()
{

    var c =  parseInt($("ctl00_ContentPlaceHolder1_JBSearchOrgj").innerHTML);
    if(c==1)
    {
        $("w").value = $("ctl00_ContentPlaceHolder1_jbKey").innerHTML;
        $("expdate").value = $("ctl00_ContentPlaceHolder1_jbExp").innerHTML;
        $("stype").value = $("ctl00_ContentPlaceHolder1_jbSearchType").innerHTML;
        var tj = parseInt($("ctl00_ContentPlaceHolder1_jbSearchMode").innerHTML);
        //alert(c);
        if(tj==1)
        {
            $("tj1").checked = true;
        }
        else
        {
            $("tj"+(tj-1)).checked = true;
        }
    }
    else
    {
        $("issn").value = $("ctl00_ContentPlaceHolder1_GJissn").innerHTML;
        $("qkm").value = $("ctl00_ContentPlaceHolder1_GJqkm").innerHTML;
        $("zzs").value = $("ctl00_ContentPlaceHolder1_GJzzs").innerHTML;
        $("dak").value = $("ctl00_ContentPlaceHolder1_GJdak").innerHTML;
        searchType(c);
    }    
}
init();
</script>

</asp:Content>
