"use strict";

/**
 * 返回结果代码集
 *
 * @author sam.sin
 * @class response
 * @constructor
 */
module.exports = {
	/**
     * 请求成功
     * @property success 
     * @type Object
     * @static 
     */
    success: {
        code: 200,
        msg: "success"
    },

    createError: {
        code: 6601,
        msg: "create fail!"
    },

    deleteFail: {
        code: 6602,
        msg: "delete fail!"
    },

    updateFail: {
        code: 6603,
        msg: "update fail!"
    },

	/**
     * 参数错误
     * @property paramsError 
     * @type Object
     * @static 
     */
    paramsError: {
        code: 4001,
        msg: "params error"
    },

	/**
     * sid 失效
     * @property sidDisable 
     * @type Object
     * @static 
     */
    sidDisable: {
        code: 4002,
        msg: "sid disable"
    },

	/**
     * 登录失败
     * @property loginFail 
     * @type Object
     * @static 
     */
    loginFail: {
        code: 30001,
        msg: "params error"
    },

	/**
     * 用户不存在
     * @property loginUserNameOrPassError 
     * @type Object
     * @static 
     */
    loginUserNameOrPassError: {
        code: 30002,
        msg: "username or password error"
    },

    /**
     * 未登录
     * @property notLogin
     * @type Object
     * @static
     */
    notLogin: {
        code: 30003,
        msg: "you have not login"
    },

    /**
     * 已登录
     * @property isLogin
     * @type Object
     * @static
     */
    isLogin: {
        code: 30004,
        msg: "you was logined"
    },

	/**
     * 保存页面失败
     * @property pulishPageFail 
     * @type Object
     * @static 
     */
    pulishPageFail: {
        code: 40001,
        msg: "pulish page fail"
    },

	/**
     * 页面不存在
     * @property pageNotExit 
     * @type Object
     * @static 
     */
    pageNotExit: {
        code: 40002,
        msg: "component not exist"
    },

	/**
     * 添加组件失败
     * @property addComFail 
     * @type Object
     * @static 
     */
    addComFail: {
        code: 50001,
        msg: "add component fail"
    },

	/**
     * 更新组件失败
     * @property updComFail 
     * @type Object
     * @static 
     */
    updComFail: {
        code: 50002,
        msg: "update component fail"
    },

	/**
     * 更新组件 位置已被占用
     * @property updComPosExist 
     * @type Object
     * @static 
     */
    updComPosExist: {
        code: 500021,
        msg: "component pos already exist"
    },

	/**
     * 删除组件失败
     * @property delComFail 
     * @type Object
     * @static 
     */
    delComFial: {
        code: 50003,
        msg: "delete component fail"
    },

	/**
     * 组件不存在
     * @property comNotExit 
     * @type Object
     * @static 
     */
    comNotExit: {
        code: 50004,
        msg: "component not exist"
    },

	/**
     * 找不到组件数据文件(data.js)
     * @property comDataNotFound 
     * @type Object
     * @static 
     */
    comDataNotFound: {
        code: 50005,
        msg: "component data not found"
    },

	/**
     * 获取组件数据内容失败
     * @property getComDataFail 
     * @type Object
     * @static 
     */
    getComDataFail: {
        code: 50006,
        msg: "get component data fail"
    },

	/**
     * 获取组件内容失败
     * @property getComDataFail 
     * @type Object
     * @static 
     */
    getComsFail: {
        code: 50007,
        msg: "get components fail"
    },

	/**
     * 创建项目失败
     * @property addProjectFail 
     * @type Object
     * @static 
     */
    addProjectFail: {
        code: 60001,
        msg: "add project fail"
    },

	/**
     * 添加页面失败
     * @property addPageFail 
     * @type Object
     * @static 
     */
    addPageFail: {
        code: 70001,
        msg: "add page fail"
    },

	/**
     * 添加页面失败
     * @property addPageFail 
     * @type Object
     * @static 
     */
    updatePageFail: {
        code: 700011,
        msg: "update page fail"
    },

	/**
     * 获取页面列表失败
     * @property getPageListFail 
     * @type Object
     * @static 
     */
    getPageListFail: {
        code: 70002,
        msg: "get page list fail"
    },

	/**
     * 找不到 projectId
     * @property projectIdNotFound 
     * @type Object
     * @static 
     */
    projectIdNotFound: {
        code: 60004,
        msg: "project id not found"
    },

	/**
     * 上传文件失效
     * @property uploadProjectFileFail 
     * @type Object
     * @static 
     */
    uploadProjectFileFail: {
        code: 60005,
        msg: "upload project file fail"
    },

	/**
     * 上传文件格式不对
     * @property uploadProjectFileWrongFormat 
     * @type Object
     * @static 
     */
    uploadProjectFileWrongFormat: {
        code: 60006,
        msg: "upload project file wrong format"
    },

    /**
     * 缺少components
     * @property needComponents
     * @type Object
     * @static
     */
    needComponents: {
        code: 60007,
        msg: "components is needed"
    },

    /**
     * 缺少views
     * @property needViews
     * @type Object
     * @static
     */
    needViews: {
        code: 60008,
        msg: "views is needed"
    },

    /**
     * 项目包不匹配当前项目
     * @property errorPackage
     * @type Object
     * @static
     */
    errorPackage: {
        code: 60009,
        msg: "the package is not this project's"
    },

    /**
     * 不存在可回滚的项目包
     * @property projectNotExist
     * @type Object
     * @static
     */
    projectNotExist: {
        code: 60010,
        msg: "there is no package to roll"
    },

	/**
     * 相关文件正在被操作
     * @property fileOperating 
     * @type Object
     * @static 
     */
    fileOperating: {
        code: 100001,
        msg: "file operating"
    },

	/**
     * 创建菜单失败
     * @property addMenuFail 
     * @type Object
     * @static 
     */
    addMenuFail: {
        code: 100002,
        msg: "add menu fail"
    },

	/**
     * 添加用户失败
     * @property addUserFail
     * @type Object
     * @static 
     */
    addUserFail: {
        code: 100003,
        msg: "add user fail"
    },

	/**
     * 用户名存在
     * @property getUserListFail
     * @type Object
     * @static 
     */
    addUserFail_usernameIsExist: {
        code: 1000031,
        msg: "username is exist"
    },

	/**
     * 获取用户列表失败
     * @property getUserListFail
     * @type Object
     * @static 
     */
    getUserListFail: {
        code: 1000032,
        msg: "get user list fail"
    },

	/**
     * 删除用户失败
     * @property delUserFail
     * @type Object
     * @static 
     */
    delUserFail: {
        code: 1000033,
        msg: "delete user fail"
    },

	/**
     * 获取角色列表失败
     * @property getRolesFail
     * @type Object
     * @static 
     */
    getRolesFail: {
        code: 100005,
        msg: "get roles fail"
    },

	/**
     * 获取用户信息失败
     * @property getUserInfoFail
     * @type Object
     * @static 
     */
    getUserInfoFail: {
        code: 100006,
        msg: "get user info fail"
    },

	/**
     * 不存在该用户
     * @property userNotExist
     * @type Object
     * @static 
     */
    userNotExist: {
        code: 100007,
        msg: "user not exist"
    },

	/**
     * 添加角色失败
     * @property addRoleFail
     * @type Object
     * @static 
     */
    addRoleFail: {
        code: 100008,
        msg: "add role fail"
    },

	/**
     * 更新角色失败
     * @property updateRoleFail
     * @type Object
     * @static 
     */
    updateRoleFail: {
        code: 100009,
        msg: "update role fail"
    },

	/**
     * 更新角色失败
     * @property updateRoleFail
     * @type Object
     * @static 
     */
    getRoleListFail: {
        code: 100010,
        msg: "get role list fail"
    },

	/**
     * 获取页面信息
     * @property getPageDetailFail
     * @type Object
     * @static 
     */
    getPageDetailFail: {
        code: 100011,
        msg: "get page detail fail"
    }
}