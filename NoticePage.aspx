<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="NoticePage.aspx.cs" Inherits="qjbopac.NoticePage" Title="公告信息内容" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div class="noticePage">
<div id="noticePageName" class="noticePageTitle" runat="server"></div>
<div id="noticePageTime" class="noticePageTime" runat="server"></div>
<div id="noticePageContent" class="noticePageContent" runat="server">
</div>
<div id="noticePageImg"><a href="NoticeList.aspx"><img src="Images/back.gif" alt="返回公告信息" border="0" title="返回公告信息" /></a></div>
</div>
</asp:Content>
