<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="MyLib.aspx.cs" Inherits="qjbopac.MyLib" Title="我的图书馆" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="mainContent">
        <div id="noticePage" class="noticePage" runat="server">
            <div id="loginBox">
                <h3>
                    请登录</h3>
                <table>
                    <tr>
                        <td class="loginName">
                            读者编号：
                        </td>
                        <td align="right">
                            <input name="input" style="width: 150px;" id="myuname" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td class="loginName">
                            密码：
                        </td>
                        <td align="right">
                            <input id="myupwd" style="width: 150px;" onkeyup="if(event.keyCode==13) mylogin();"
                                type="password" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="right">
                            <div id="loginBoxBtn" onclick="mylogin()">
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="explanation">
                    首次登录时，密码为读者编号，登录后请修改密码！</div>
            </div>
        </div>
        <div style="display: none;" id="MyLibInfo" runat="server">
            <div class="aboutMe">
                <div id="aboutMeTitle">
                    个人信息</div>
                <div class="photo">
                    <img id="rdPic" runat="server" style="width: 94px;height:134px;"/></div>
                <table>
                    <tr>
                        <td class="name">
                            读者编号：
                        </td>
                        <td id="rdId" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            读者姓名：
                        </td>
                        <td id="rdName" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            读者角色：
                        </td>
                        <td id="rdRole" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            读者状态：
                        </td>
                        <td id="rdState" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            办证日期：
                        </td>
                        <td id="rdRegDate" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            充值余额：
                        </td>
                        <td id="rdRestmny" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            外借期限：
                        </td>
                        <td id="rdCanBorrow" runat="server">
                        </td>
                    </tr>                    
                    <tr>
                        <td class="name">
                            可借天数：
                        </td>
                        <td id="rdBordays" runat="server">
                        </td>
                    </tr>                    
                    <tr>
                        <td class="name">
                            预借期限：
                        </td>
                        <td id="rdBorpredays" runat="server">
                        </td>
                    </tr>                    
                    <tr>
                        <td class="name">
                            已外借数：
                        </td>
                        <td id="rdBorrowed" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            已预借数：
                        </td>
                        <td id="rdBorrowpre" runat="server">
                        </td>
                    </tr>
                </table>
                <div class="buttontemp">
                     <div class="refreshpic" onclick="RefreshreaderPicjs();"></div>
                     <div class="alter" onclick="displayNone($('chanagepass'));"></div>
                </div>
                <div class="change" id="chanagepass" style="display: none;">
                    <table>
                        <tr>
                            <td align="right">
                                原密码：
                            </td>
                            <td>
                                <input id="oldPass" name="oldPass" type="password" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                新密码：
                            </td>
                            <td>
                                <input id="newPass1" name="newPass1" type="password" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                确认新密码：
                            </td>
                            <td>
                                <input id="newPass2" name="newPass2" onkeyup="if(event.keyCode==13) changepwd();"
                                    type="password" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right">
                                <input type="button" onclick="changepwd();" value="确 定" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="business">
                <div class="businessTitle">
                    <ul>
                        <li><a id="a1" style="color: #0054b3; height: 27px; line-height: 25px; width: 70px;
                            margin-top: 2px; background: url(Images/business_hover.gif); text-decoration: none;"
                            onclick="getMyLibInfo(1);showStyle(this);">当前借阅</a></li><li><a id="a2" onclick="getMyLibInfo(2);showStyle(this);">
                                我的预借</a></li><li><a id="a3" onclick="getMyLibInfo(3);showStyle(this);">借阅历史</a></li>
                    </ul>
<%--                    <select id="sType" style="width: 60px;" onchange="getMyLibInfo($('cType').innerHTML);">
                        <option value="1" selected="selected">图书</option>
                        <option value="2">期刊</option>
                    </select>--%>
                </div>
                <div id="tbList" runat="server">
                </div>
                <div id="page" style="display:none;">
                    <ul>
                        <li>转到第<input id="cPage" name="cPage" runat="server" value="1" onkeyup="checkNum(event);" onafterpaste="replaceChar(event);" type="text" />                             
                            /<span id="maxPageIndex" runat="server">1</span>页</li>
                        <li id="next" onclick="execQuery(parseInt($('ctl00_ContentPlaceHolder1_cPage').value) + 1);"></li>
                        <li id="previous" onclick="execQuery(parseInt($('ctl00_ContentPlaceHolder1_cPage').value) - 1);"></li>
                    </ul>
                </div>
                <span id="cType" style="display: none;">1</span>
            </div>
        </div>
    </div>

    <script language="JavaScript" type="text/javascript" src="Jscript/OpStateMsg.js"></script>

    <script language="javascript" type="text/javascript" src="Jscript/Mylib.js"></script>

</asp:Content>
