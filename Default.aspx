<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="qjbopac.Default" Title="无标题页" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="search" style="height:auto !important; height:396px; min-height:396px;">
	<div class="chooseSearch" style="margin-top:40px; padding:0 60px;">  
	    <div class="chooseSearchContent">
	        <div class="chooseSearchTitle">
	            <ul>
	                <li><a class="norhi" id="jbs" style="cursor:pointer;" onclick="searchType(1)" >基本检索</a></li>
	                <li><a id="gjs" style="cursor:pointer;" onclick="searchType(2)">高级检索</a></li>
	                <li><a id="gjs" style="cursor:pointer;" href="http://10.63.57.12/tsg/BookSearch.aspx?c=1&stype=tb_info.prs_nme&w=%e5%87%ba&tj=1&d=0"></a></li>
				</ul>
	        </div>    
	        <div class="searchBox" style="padding:40px;">    
        	    <div class="choose">
        	        <ul>
        	            <li><a id="bkquery" style="cursor:pointer;" onclick="qkorbk(1);" class="qkorbk">图书</a></li>
        	            <li><a id="qkquery" style="cursor:pointer;" onclick="qkorbk(2);">期刊</a></li>
        	        </ul>
        	    </div>
        	    <div id="nSearch">
        	        <div class="searchInputBox" style=" margin-top:20px;">
    	                <span style="float:left;"><input name="w" class="searchBoxInput" id="w" onkeyup="if(event.keyCode==13) Search();" type="text" /></span>
    	                <span style="float:right; *margin-top:1px; cursor:pointer;"><img src="Images/search.png" alt="检索" title="检索" onclick="Search();" /></span>
        	        </div>
                    <div class="searchBoxContent" style="margin-top:20px;">
                    	<span>请选择检索范围：</span>
                        <span>
                            <select name="expdate" id="expdate" onchange="exISBN(value);">
                                <option value="0"  selected="selected">全部的图书</option>
                                <option value="3">最近三天的新书</option>
                                <option value="7">最近一周的新书</option>
                                <option value="30">最近一月的新书</option>
                            </select>
                            <select name="qkexpdate" id="qkexpdate" style="display:none;">
                                <option value="0" selected="selected">全部的期刊</option>
                                <option value="3">最近三天的新期刊</option>
                                <option value="7">最近一周的新期刊</option>
                                <option value="30">最近一月的新期刊</option>
                            </select>
                        </span>
                    </div>
                    <div class="searchBoxContent">
                        <span>请选择检索类型：</span>
                        <span><select name="qkstype" id="qkstype" style="display:none;">
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
                            <select name="stype" id="stype" onchange="exISBN(value);">
                                <option value="tb_info.bk_name" selected="selected">正题名</option>
                                <option value="tb_info.bk_isbn">ISBN码</option>                                
                                <option value="tb_info.bk_auth">责任者</option>
                                <option value="tb_info.prs_nme">出版社</option>
                                <option value="tb_info.bk_keyname">主题词</option>
                                <option value="tb_info.bk_class">分类号</option>
                                <option value="tb_info.bk_seri">丛编题名</option>
                                <option value="tb_bookstore.barid">条码号</option>
                                <option value="tb_bookstore.place">索书号</option>
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
    		    <div class="searchBoxTable" id="hSearch" style="display:none;  margin-top:10px;">
    		        <table id="book">
        	            <tr>
            	            <td class="inputName">ISBN</td>
                            <td><input id="isbn" type="text" /></td>
                            <td class="inputName">正题名</td>
                            <td><input id="ztm" type="text" /></td>
                        </tr>
                        <tr>
                            <td class="inputName">出版社</td>
                            <td><input id="cbs" type="text" /></td>
                            <td class="inputName">主题词</td>
                            <td><input id="ztc" type="text" /></td>
                        </tr>
                        <tr>
            	            <td class="inputName">责任者</td>
                            <td><input id="zrz" type="text" /></td>
                            <td class="inputName">出版年</td>
                            <td><input id="cbn" type="text" /></td>
                        </tr>
                        <tr>
            	            <td></td>
                        </tr>
                        <tr><td colspan="4"><div class="resetBtn" onclick="reset()"></div><div class="searchBtn" onclick="hSearch();"></div></td></tr>
                    </table>
                    <table id="qikan" style="display:none;">
       	                <tr>
            	                <td class="inputName">ISSN</td>
                                <td><input id="issn" type="text" /></td>
                                <td class="inputName">期刊名</td>
                                <td><input id="qkm" type="text" /></td>

                            </tr>
                            <tr>
            	                <td class="inputName">杂志社</td>
                                <td><input id="zzs" type="text" /></td>
                                <td class="inputName">邮发代号</td>
                                <td><input id="dak" type="text" /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr><td colspan="4"><div class="resetBtn" onclick="reset()"></div><div class="searchBtn" onclick="qkhSearch();"></div></td></tr>
                    </table>
                </div>         
            </div>
        </div>
    </div>
</div>
<span style="display:none;" id="jborgj">1</span>
<span style="display:none;" id="ctype">1</span>
<span style="display:none;" id="fName">BookSearch.aspx?c=1</span>
<script language="javascript" src="Jscript/web.js" type="text/javascript"></script>

</asp:Content>
