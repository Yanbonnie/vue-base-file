const URL = {
    getCurAccount:'cus/account/getCurAccount',                                //获取用户信息接口
    getHeadIcon:'cus/account/getHeadIcon',                                    //获取头像接口
    logoutWithoutPage:'logoutWithoutPage',                                    //神州云退出登录清除session

    //首页
    signDocCount:'doc/documentList/signDocCount',                             //获取待我签数量,
    indexDraft:'doc/documentList/indexDraft',                                 //获取草稿箱数量
    searchMemberListLight:'cus/companyMember/searchMemberListLight',          //大B管理员获取成员列表
    ajaxLight:'cus/companyPartners/ajaxSearchPartnersManagementLight',        //大B管理员获取合作伙伴列表
    BigUserSearchParList:'cus/companyPartners/ajaxSearchPartnersListLight',   //大Buser获取合作伙伴成员列表
    searchParList:'cus/ordinaryPartners/ajaxSearchPartnersListLight',         //小B管理员获取合作伙伴列表    
    //归档页面接口
    searchArchiveDirList:'doc/archiveDir/searchArchiveDirList',               //获取文件夹数据
    searchArchiveRecordList:'doc/archiveRecord/searchArchiveRecordList',      //获取归档文件夹列表
    getArchiveRecordCount:'doc/archiveRecord/getArchiveRecordCount',          //获取归档文件夹文件数
    modifyArchiveRecordDir:'doc/archiveRecord/modifyArchiveRecordDir',        //修改归档文件夹列表
    cancelArchiveRecord:'doc/archiveRecord/cancelArchiveRecord',              //撤销归档文件夹列表
    addArchiveRecords:'doc/archiveRecord/addArchiveRecords',                  //批量添加归档文件
    searchDocumentList:'doc/documentList/searchDocumentList',                 //添加归档文件列表  非主管
    searchStructDocumentList:'doc/documentList/searchStructDocumentList',     //添加归档文件列表  主管
    addArchiveDir:'doc/archiveDir/addArchiveDir',                             //确认新增文件夹
    modifyArchiveDir:'doc/archiveDir/modifyArchiveDir',                       //修改文件夹名称
    deleteArchiveDir:'doc/archiveDir/deleteArchiveDir',                       //删除文件夹

    //验签页面接口
    verify:'doc/docVerify/verify',                                             //验签接口           
    
    //签署次数
    signStatistics:'doc/documentInfo/signStatistics',                          //签署次数列表
    signStatisticsDetails:'doc/documentInfo/signStatisticsDetails',            //签署详情

    //签署日志
    getAccountAudit:'cus/accountAudit/getAccountAudit',                        //用户操作日志
    getOperdata:'doc/operdata/getOperdata',                                    //文档操作日志
    getProcessRecord:'doc/operdata/getProcessRecord',                          //签署过程日志

    //站内消息
    searchMessagePaging:'sys/message/searchMessagePaging',                     //获取站内消息列表
    readMessage:'sys/message/readMessage',                                     //阅读消息标记为已读
    delMessage:'sys/message/delMessage',                                       //用户删除站内信息
    countUnreadMessage:'sys/message/countUnreadMessage',                       //返回用户未读消息数
    
    //联系人
    searchAccountContactList:'cus/accountContact/searchAccountContactList',    //联系人列表
    addAccountContact:'cus/accountContact/addAccountContact',                  //添加联系人
    getAccountContact:'cus/accountContact/getAccountContact',                  //获取联系人详情
    delAccountContact:'cus/accountContact/delAccountContact',                  //删除联系人
    editAccountContact:'cus/accountContact/editAccountContact',                //编辑联系人
    
    //合作伙伴  +*****
    ajaxSearchPartnersManagement:'cus/companyPartners/ajaxSearchPartnersManagement',    //获取合作伙伴列表(大B管理员)
    ajaxAddOrdinaryPartners:'cus/ordinaryPartners/ajaxAddOrdinaryPartners',             //新增合作伙伴

    //文档详情页  +******
    getPdfPageNum:'doc/document/getPdfPageNum',                                //获取文档详情pdf
    getDocumentInfoVo:'doc/documentInfo/getDocumentInfoVo',                    //文档详情信息
    signtorList:'doc/documentInfo/signtorListLight',                           //签署信息
    repealDocument:'doc/documentInfo/repealDocumentLight',                     //撤销文档
    report:'doc/report/getEvidenceReportPageCount',                            //鉴定报告
    downloadDocEvidence:'doc/report/downloadDocEvidence',                      //下载鉴定报告
    getEvidenceReportImgByPage:'doc/report/getEvidenceReportImgByPage',        //获取鉴定报告连接


    //文档列表    +******
    searchDocumentLight:'doc/documentList/searchDocumentLight',                //获取文档列表数据（我自己的）
    searchStructDocumentLight:'doc/documentList/searchStructDocumentLight',    //获取文档列表数据（我下属的）


    //----归档到     +******
    searchArchiveDirList:'doc/archiveDir/searchArchiveDirList',                //获取归档到文件夹数据       
    addArchiveRecord:'doc/archiveRecord/addArchiveRecord',                     //归档到哪个文件夹

    /*我发起的，抄送给我的 */
    searchSponsorDocListLight:'doc/documentList/searchSponsorDocListLight',    //我发起的文档列表
    searchCarbonDocList:'doc/documentList/searchCarbonDocList',                //抄送给我的文档列表

    //草稿箱
    searchDraft:'doc/documentList/searchDraftLight',                          //草稿箱列表数据
    deleteDraft:'doc/document/deleteDraft',                                   //删除草稿箱

    //发起签约页面
    uploadProgress:'doc/document/uploadProgressLight',                       //上传文件
    getPdfPreview:'doc/document/getPdfPreview',                              //获取pdf文档第一页图片
    searchCompanySignatoryLight:'doc/document/searchCompanySignatoryLight',  //大Buser 获取签署人列表
    searchOrdinaryPartnersLight:'doc/document/searchOrdinaryPartnersLight',  //小B获取签署人列表
    getDocTemplate:'doc/document/getDocTemplate',                            //获取签署文档
    createDocumentLight:'doc/document/createDocumentLight',                  //发起签约
    addTemplate:'doc/document/addTemplate',                                  //创建模板
    delDocTemplate:'doc/document/delDocTemplate',                            //删除模板
    getUploadDoc:'doc/document/getUploadDocLight',                           //从草稿箱点击进入发起签约页面
    checkContact:'cus/accountContact/checkContact',                          //根据手机号获取联系人信息（用于输入手机号自动补全）
    checkPartners:'cus/ordinaryPartners/checkPartnersLight',                 //根据邮箱获取合作伙伴（用于输入邮箱自动补全） 小B

    //基本信息     +**************
    uploadHeadIcon:'cus/account/uploadHeadIcon',                             //修改头像
    getCurAccountCompany:'cus/account/getCurAccountCompany',                 //获取企业信息（大Buser）
    verificationCode:'cus/account/verificationCode',                         //获取手机验证码  （params:mobileNo）
    modifyPhone:'cus/account/modifyPhoneLight',                              //修改手机号码 phoneOld:13533596699 phoneNew:18825039689  code:543989
    modifyCompanyName:'cus/account/modifyCompanyNameLight',                  //修改企业名称（newCompanyName：123）
    modifyPassword:'cus/account/modifyPasswordLight',                        //修改密码（pwdOld：xxx  pwdNew:xxx）
    updateAccountCompany:'cus/account/updateAccountCompany',                 //（GET）修改法人姓名/修改电话号码/修改地址/修改备注（modifyField：legal/tel/address/memo  modifyValue：xxx）  get
    getServicePrikey:'sys/largeCompany/getServicePrikey',                    //大B获取接口服务私钥 largeCompanyId


    //安全设置      
    getServiceCert:'sys/largeCompany/getServiceCert',                        //获取证书
    getAccountCertList:'cus/accountCert/getAccountCertList',                 //获取证书列表
    userAuthrity:'sys/auth/userAuthrityLight',                               //实名认证
    bindPhone:'cus/account/bindPhoneLight',                                  //绑定手机
    relateUKey:'cus/accountCert/relateUKeyLight',                            //关联证书
    deleteUKey:'cus/accountCert/deleteUKey',                                 //解除绑定  (form)  
    bindServiceCert:'sys/largeCompany/bindServiceCertLight',                 //大B管理员绑定证书
    unBindServiceCert:'sys/largeCompany/unBindServiceCert',                  //大B管理员解绑
    comAuthority:'sys/auth/comAuthorityLight',                               //企业实名认证
    getAuthStatus:'sys/auth/getAuthStatus',                                  //小B判断有无实名认证

    //扫码认证
    authQrCodeBind:'sys/auth/authQrCodeBind',                                //扫码认证
    authQrCodeBindCheck:'sys/auth/authQrCodeBindCheck',                      //实名认证扫码状态
    
    
    //签章管理     +***************
    getStampAndCertList:'doc/stamp/getStampAndCertList',                     //签章列表
    getStampPer:'doc/stamp/getStampPerLight',                                //每个签章列表数据
    defaultStamp:'doc/stamp/defaultStampLight',                              //设置默认签章
    copyStamp:'doc/stamp/copyStampLight',                                    //复制签章
    delStamp:'doc/stamp/delStampLight',                                      //删除签章
    stampBind:'doc/stamp/stampBindLight',                                    //授权
    stampBindList:'doc/stamp/stampBindList',                                 //获取授权列表数据
    getCertInfo:'cus/accountCert/getCertInfo',                               //绑定UKEY接口
    addStampLight:'doc/stamp/addStampLight',                                 //添加印章

    //组织架构
    ajaxGetTreeNum:'cus/orgStructure/ajaxGetTreeLight?isWithCount=1',        //获取组织架构列表数据（带num）
    ajaxGetTree:'cus/orgStructure/ajaxGetTreeLight',                              //获取组织架构列表数据（不带num）
    getStructNameString:'cus/orgStructure/getStructNameString',              //获取组织架构字符串  structureId = ？
    setMemberRole:'cus/companyMember/setMemberRole',                         //设置主管 [{memId: "77031ca6bdf044fb9db923d94ca1fee5", role: "1"}]
    delMember:'cus/companyMember/delMember',                                 //注销一个用户 memId
    unDelMember:'cus/companyMember/unDelMember',                             //启用一个用户 memId
    delMemberList:'cus/companyMember/delMemberList',                         //批量注销用户
    unDelMemberList:'cus/companyMember/unDelMemberList',                     //批量启用用户
    addOrgStructure:'cus/orgStructure/addOrgStructureLight',                 //添加部门
    delOrgStructure:'cus/orgStructure/delOrgStructureLight',                 //删除部门
    editOrgStructureLight:'cus/orgStructure/editOrgStructureLight',          //编辑部门
    getMemberDetail:'cus/companyMember/getMemberDetail',                     //获取成员详细信息
    editMember:'cus/companyMember/editMember',                               //编辑成员
    addMember:'cus/companyMember/addMemberLight',                            //添加成员
    importMembers:'cus/companyMember/importMembers',                         //导入成员
    userAuthrityStep:'sys/auth/userAuthrityStepLight',                       //实名认证接口
    reActivateByMail:'cus/account/reActivateByMail',                         //重发激活邮件
    movePartnerToStructure:'cus/orgStructure/movePartnerToStructure',       //把合作伙伴移动到根目录

    //合作伙伴
    addCompanyPartners:'cus/companyPartners/addCompanyPartnersLight',              //添加合作伙伴（大B管理员）
    checkPartners:'cus/companyPartners/checkPartnersLight',                        //合作伙伴检验（大B）    
    importPartners:'cus/companyPartners/importPartners',                           //导入合作伙伴
    exportPartnersExcel:'cus/companyPartners/exportPartnersExcel',                 //导出合作伙伴
    getCompanyPartners:'cus/companyPartners/getCompanyPartnersLight',              //获取合作伙伴详情(大B)
    ajaxSearchStructureIdList:'cus/companyPartners/ajaxSearchStructureIdList',     //获取合作伙伴所属部门,(大B)
    editCompanyPartnersById:'cus/companyPartners/editCompanyPartnersByIdLight',    //编辑合作伙伴(大B)
    delCompanyPartners:'cus/companyPartners/delCompanyPartnersLight',              //删除合作伙伴(大B)
    addOrdinaryPartners:'cus/ordinaryPartners/ajaxAddOrdinaryPartners',            //添加合作伙伴（小B）   addOrdinaryPartners
    checkPartnerSmall:'cus/ordinaryPartners/checkPartnersLight',                   //合作伙伴检验（小B）
    getOrdinaryPartners:'cus/ordinaryPartners/getOrdinaryPartnersLight',           //获取合作伙伴详情(小B)
    editOrdinaryPartnersById:'cus/ordinaryPartners/editCompanyPartnersByIdLight',  //编辑合作伙伴（小B）
    delOrdinaryPartners:'cus/ordinaryPartners/delOrdinaryPartnersLight',           //删除合作伙伴（小B）
    
    

    
}
export default URL;