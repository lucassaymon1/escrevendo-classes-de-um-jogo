class Hero {
	constructor(name, age, type) {
		this.name = name
		this.age = age
		this.type = type
	}

	attack() {
		const types = {
			guerreiro: 'espada',
			mago: 'magia',
			monge: 'artes marciais',
			ninja: 'shuriken'
		}

		let hasType = false

		for (const key in types) {
			if (String(key) === this.type) {
				const attackType = types[key]
				console.log(
					`${this.name}, do tipo ${this.type} atacou usando ${attackType}.`
				)
				hasType = true
				break
			}
		}
		if (!hasType)
			console.log(`A classe "${this.type}" não está disponível no jogo.`)
	}
}

const hero = new Hero('Lucatiel of Mirrah', 26, 'guerreiro')

hero.attack()
