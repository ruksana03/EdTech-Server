var express = require("express");
const {
    getAllMember,
    createNewMember,
    deleteMember,
    getOneMember,
    updatedMemberInfo
} = require("../../../api/v1/member/controllers");

var router = express.Router()

router.get("/all-member", getAllMember);
router.post("/members", createNewMember);
router.delete("/member/delete/:id", deleteMember);
router.get("/all-member/:id",getOneMember);
router.put("/member/update/:id", updatedMemberInfo);

module.exports = router;