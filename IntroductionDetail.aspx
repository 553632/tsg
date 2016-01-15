<%@ Page Language="C#" MasterPageFile="~/MainPage.Master" AutoEventWireup="true" CodeBehind="IntroductionDetail.aspx.cs" Inherits="qjbopac.IntroductionDetail" Title="无标题页" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div class="noticePage">
<div class="noticePageTitle" id="noticePageName" runat="server"></div>
<div class="introductionContent" id="libIntro" runat="server">

</div>
<div id="noticePageImg"><a href="Introduction.aspx"><img src="Images/backup.gif" alt="返回本馆概况列表" border="0" title="返回本馆概况列表" /></a></div>
</div>
</asp:Content>
