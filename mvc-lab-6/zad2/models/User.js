class User {
    constructor(id, login) {
        this.id = id
        this.login = login
    }

    static getAll() {
        return [
            new User(1, "user1"),
            new User(2, "user2"),
        ]
    }
}
module.exports = User
