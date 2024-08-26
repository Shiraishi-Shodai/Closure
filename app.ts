window.onload = function() {

    let Hello = function(_name, _major) {
        // カプセル化されたプロパティ（変数）
        let name = _name;
        // 公開されているプロパティ（変数）
        this.major = _major;

        // カプセル化されたメソッド
        let getName = function() {
            return name;
        }

        this.setName = function(_name) {
            name = 'Mr.' + _name;
        }


        this.getMajor = function() {
            return this.major;
        }

        this.say = function() {
            console.log('Hello! ' + getName() + '. I know you are great about ' + this.major + '!');
        }
    }
}

const ins = new Hello('Jobs', 'Design');
ins.say();