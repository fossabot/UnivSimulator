# 大学模拟器/UnivSimulator v0.99
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FUsu171%2FUnivSimulator.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FUsu171%2FUnivSimulator?ref=badge_shield)


# 游戏方式：


1. 在线访问 https://lingch16.github.io/UnivSimulator/      或 https://bijiazu.inari.site/UnivSimulator/              
2. 下载本仓库（除licence和readme以外的）所有文件，确保处于同一文件夹。点击index.html开始游戏。

可能有未知bug，欢迎报bug。     
也欢迎提出游戏平衡性相关的建议。


# 更新日志：

v0.99：
学期规划增加一些随机性，小幅平衡性调整。
选专业页新增医学专业（但相关事件没怎么做，而且学制依然是四年。相关改动比较复杂，短期内估计不会改了）。
状态栏新增眼界、智力显示。二者均比较高时，显示具体数值。

v0.98：
现在欢迎页和结局页会显示github角标。

v0.97：
学期规划的平衡性调整。
修正部分文案，修复一些小bug和像feature的bug。

v0.96：
增加了对浏览器不支持web动画时的异常处理。
修正一个结局相关的bug，各专业的小幅平衡性调整。


v0.95：
小幅增强特典效果。大概能提升游戏体验。


v0.94：
修复了一个结局显示相关的bug。
平衡性调整：小幅降低猝死概率、小幅增加期末考成绩。

v0.93：
修改复选框样式。增加了状态栏飘红提醒。

v0.92：
修正代码逻辑。
将代码段
`如果（满足结局条件）
  跳转结局
跳转下一阶段事件`
改成了
`如果（满足结局条件）{
  跳转结局
  return;
}
跳转下一阶段事件`
避免出现一些奇怪的bug。

v0.91： 
修复一个结局相关的bug。        
现在欢迎页的进入游戏按钮初始设为隐藏。等资源全部加载后，再显示出来。


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FUsu171%2FUnivSimulator.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FUsu171%2FUnivSimulator?ref=badge_large)