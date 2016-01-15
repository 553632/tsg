<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="ReaderGuideInfo.aspx.cs" Inherits="qjbopac.ReaderGuideInfo" Title="读者指南内容" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div class="noticePage">
<div class="noticePageTitle" id="noticePageName" runat="server"></div>
<div class="introductionContent" id="libIntro" runat="server">

</div>
<div id="noticePageImg"><a href="ReaderGuide.aspx"><img src="Images/backup.gif" alt="返回读者指南列表" border="0" title="返回读者指南列表" /></a></div>
</div>
</asp:Content>
