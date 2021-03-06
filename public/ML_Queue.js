
function ML_Queue(max_length) {
	this.max_length = max_length;
	this.count = 0;
	this.head = 0;
	this.tail = 0;
	this.array = new Array(max_length);
}

ML_Queue.prototype.push = function(element) {
	if (this.count < this.max_length) {
		if (this.count == 0) {
			let index = this.head;
			this.tail = this.head;
			this.array[index] = element;
			this.count += 1;
			return null;
		}
		else {
			let index = (this.head + 1) % this.max_length;
			this.array[index] = element;
			this.head = index;
			this.count += 1;
			return null;
		}
	}
	else {
		let to_return = this.array[this.tail];
		this.head = this.tail;
		this.tail = (this.tail + 1) % this.max_length;
		this.array[this.head] = element;
		return to_return;
	}
};

ML_Queue.prototype.pop = function() {
	if (this.count == 0) {
		return null;
	}
	else {
		let to_return = this.array[this.tail];
		this.array[this.tail] = null;
		this.tail = (this.tail + 1) % this.max_length;
		this.count -= 1;
		return to_return;
	}
};

ML_Queue.prototype.get_average_V3 = function() {
	let sum = new THREE.Vector3();
	for (let i = 0; i < this.max_length; i++) {
		if (this.array[i] != null) {
			sum.add(this.array[i]);
		}
	}
	return sum.normalize();
};

ML_Queue.prototype.get_average_arr = function() {
	let sum = new Array();
	let count = 0;
	for (let i = 0; i < this.max_length; i++) {
		if (this.array[i] != null) {
			sum = add_to(sum, this.array[i]);
			count += 1;
		}
	}
	sum = divide_scalar(sum, count);
	return sum;
};
