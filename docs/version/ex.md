# sm64excoop
!!! warning "警告"
    本页面的所有内容是针对于 sm64coopdx 的前身 sm64excoop 所用，部分内容可能不适用于现在版本的 sm64coopdx，只做历史参考文献使用。
 
<table>
  <tr>
    <td colspan="2"><center><img src="../../img/excoop.jpg"/><br><i>sm64excoop 主菜单</i></center></td>
  </tr>
  <tr>
    <td>名称</td>
    <td>sm64excoop</td>
  </tr>
  <tr>
    <td>别名</td>
    <td>ex版, excoop</td>
  </tr>
  <tr>
    <td>作者</td>
    <td><a href="https://github.com/djoslin0">djoslin0</a><br><a href="https://github.com/robertkirkman">robertkirkman</a></td>
  </tr>
  <tr>
    <td>最新版本</td>
    <td><b>beta37.4 (PC)<br>beta36.1 (Android/Linux)</b></td>
  </tr>
  <tr>
    <td>适用平台</td>
    <td>Windows, Linux(也许), Android</td>
  </tr>
  <tr>
    <td>状态</td>
    <td><p style="color: red;">停止维护</p></td>
  </tr>
  <tr>
    <td>仓库</td>
    <td><a href="https://github.com/djoslin0/sm64ex-coop">https://github.com/djoslin0/sm64ex-coop (主仓库)</a><br><a href="https://github.com/robertkirkman/sm64ex-coop">https://github.com/robertkirkman/sm64ex-coop (安卓版fork)</a></td>
  </tr>
</table>

由 djoslin0 开发的 sm64ex 的fork，并且在此基础上添加了 Lua 模组 api 以及联网功能，支持本地联网和coopnet服务器联网。  
## 发展
早在不知道什么时候，djoslin0 fork了sm64ex，并基于其他的项目完成了联机功能的开发，在之后也完成了模组功能和初版 LuaAPI。也在这时埋下了石山，因为当时早期版本 djoslin0 测试时主要自由两人而且没有准备进行三人往上的联机测试，留下了一堆通用全局变量，tm同一个玩家整体结构还不一样。(gPlayerSyncTable, gMarioState, gNetworkPlayer) 该石山由于太过底层，导致后来的 Coop Deluxe Team 团队根本不敢改，也不知从哪下手。
2023年，robertkirkman fork了djoslin0的excoop beta36.1项目，开始兼容类Unix系统，特别是 Android，并完成了termux编译兼容，触屏触控等特性。但由于是 excoop beta36.1 版本的fork，加上现在 excoop 仓库的代码已全部删除，所以无法进行合并。**导致兼容 37 版本的模组不能在手机端使用，这一点需要特别注意。**  
2024年中旬，djoslin0 宣布不再参与 sm64excoop 的开发，将ex版的接力棒交给了 Coop Deluxe Team 的各位并开发了社区维护的 sm64coopdx，并之后观察社区对这个版本的发展如何。excoop 也就此停更，目前最新的excoop为 beta37.4，稳定版为36.1。