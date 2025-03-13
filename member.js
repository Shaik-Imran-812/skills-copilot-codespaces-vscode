function skillsMember() {
  var member = {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'HTML', 'CSS'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
  member.showSkills();
}