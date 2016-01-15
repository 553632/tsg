<%@ Page Language="C#" MasterPageFile="~/MainNull.Master" AutoEventWireup="true" CodeBehind="BookContentPage.aspx.cs" Inherits="qjbopac.BookContentPage" Title="书籍信息" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="searchContent">
    <h4>图书基本信息</h4>
    <table id="basicInfo">
       <tr>
            <td class="name" >ISBN：</td>
            <td id="t_isbn" runat="server"></td>
        </tr>
        <tr>
            <td class="name">正题名：</td>
            <td id="t_subject" runat="server"></td>
        </tr>
        <tr>
            <td class="name">
                丛编题名：</td>
            <td id="t_cbtm" runat="server"></td>
        </tr>
        <tr>
            <td class="name">责任者：</td>
            <td id="t_author" runat="server"></td>
        </tr>
        <tr>
            <td class="name">出版社：</td>
            <td id="t_cbs" runat="server"></td>
        </tr>
        <tr>
            <td class="name">出版年月：</td>
            <td id="t_printdate" runat="server"></td>
        </tr>      
        <tr>
            <td class="name">页码：</td>
            <td id="t_pages" runat="server"></td>
        </tr>
         <tr>
            <td class="name">分类号：</td>
            <td id="t_class" runat="server"></td>
        </tr>
        <tr>
            <td class="name">主题词：</td>
            <td id="t_ztc" runat="server"></td>
        </tr>
        <tr>
            <td class="name">附注：</td>
            <td id="t_fz" runat="server"></td>
        </tr>
        <tr>
            <td class="name">摘要：</td>
            <td id="t_summary" runat="server"></td>
        </tr>
    </table>
    
    <div id="photobookshow" runat="server" style="width: 188px;height:268px; margin:auto;border:0;">    
    <a id="photobooklink" runat="server" target="_blank">
        <img id="bookPic" runat="server" style="width: 188px;height:268px;" alt="封面" border="0" />
    </a>    
    </div>
     
    <h4 style="margin-top:20px;">图书馆藏信息</h4>
    <div id="tbList">
        <asp:GridView ID="GridView1" runat="server"  AutoGenerateColumns="False" OnRowDataBound="GridView1_RowDataBound" >
            <HeaderStyle CssClass="center" />
            <Columns>               
                <asp:BoundField DataField="barcode" HeaderText="条形码" SortExpression="barcode">
                    <ItemStyle />
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="storegcd" HeaderText="馆藏地">
                    <ItemStyle />
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="storeplace" HeaderText="索书号">
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="inlib"  HeaderText="状态">
                    <ItemStyle />
                    <HeaderStyle/>
                </asp:BoundField>
                <asp:BoundField DataField="bordate" HeaderText="借出日期" DataFormatString="{0:d}">
                    <HeaderStyle/>
                    <ItemStyle />
                </asp:BoundField>
                <asp:BoundField DataField="rtndate" HeaderText="应还日期" DataFormatString="{0:d}">
                    <HeaderStyle/>
                    <ItemStyle />
                </asp:BoundField>
                <asp:TemplateField HeaderText="操作">
                    <ItemTemplate>
                       <asp:label id="preborid" Text='<%#Eval("prebor")%>' runat="server"></asp:label>                       
                    </ItemTemplate>
                     <ItemStyle Width="60" CssClass="center" Wrap="True" />
                     <HeaderStyle CssClass="center" />
                    <HeaderStyle/>
                </asp:TemplateField>
            </Columns>
            <AlternatingRowStyle/>
        </asp:GridView>
        <span id="error" style="color:Red;" runat="server"></span>
    </div>
</div>
<script type="text/javascript" language="javascript">
function bookyj(bkid)
{
    if(confirm('确认预借本书吗？'))
    {
        var res = qjbopac.BookContentPage.bookYJ(bkid);
        if(res.error) return showAjaxProError(res.error);
        if(res.value == true)
        {
            alert('预借成功！');
            window.location.reload();
        }
        else
        {
            alert('预借失败！');
        }
    } else {return;}
}
</script>
</asp:Content>
