<%@ Page Language="C#" MasterPageFile="~/MainNull.Master" AutoEventWireup="true" CodeBehind="MagazineContentPage.aspx.cs" Inherits="qjbopac.MagazineContentPage" Title="期刊信息" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="searchContent">
    <h4>期刊基本信息</h4>
    <table id="basicInfo">
       <tr>
            <td class="name">ISSN：</td>
            <td id="issn" runat="server"></td>
        </tr>
        <tr>
            <td class="name">期刊名：</td>
            <td id="qkname" runat="server"></td>
        </tr>
        <tr>
            <td class="name">并列提名：</td>
            <td id="qkbltm" runat="server"></td>
        </tr>
        <tr>
            <td class="name">刊期号：</td>
            <td id="qkkqh" runat="server"></td>
        </tr>
        <tr>
            <td class="name">出版日期：</td>
            <td id="qkpubtime" runat="server"></td>
        </tr>
        <tr>
            <td class="name">发行单位：</td>
            <td id="qkcbs" runat="server"></td>
        </tr>
        <tr>
            <td class="name" >邮发代号</td>
            <td id="qkyfdh" runat="server"></td>
        </tr>
        <tr>
            <td class="name" >发行周期</td>
            <td id="qkfxzq" runat="server"> </td>
        </tr>
        <tr>
            <td class="name">语种</td>
            <td  id="qkyz" runat="server"></td>
        </tr>
        <tr>
            <td class="name">主题词：</td>
            <td id="qkztc" runat="server"></td>
        </tr>
    </table>
    <h4 style="margin-top:20px;">期刊馆藏信息</h4>
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
        var res = qjbopac.MagazineContentPage.bookYJ(bkid);
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
