const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addToFriendList,
    removefromFriendList
  } = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).post(updateUser).delete(removeUser);

router.route("/:id/friends/:friendsId").post(addFriend);

router
  .route('/:userId/friends/:friendId')
  .delete(removefromFriendList);

module.exports = router;