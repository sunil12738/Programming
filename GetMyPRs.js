//To get list of all my PRs raised.
//Requires some manual work.
a = []
b = false
for(i=0;i<50 && !window.b;++i){
	fetch(`http://bitbucket.goomo.team/rest/api/latest/projects/WEB/repos/web-client-app/pull-requests?avatarSize=64&order=newest&state=ALL&role.1=AUTHOR&username.1=sunil.chaudhary&start=${i*25}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.values);
      a = a.concat(data.values);
      window.b = data.isLastPage
    })
}
for(j=0;j<a.length;++j) {
	c = a[j]
	title = c.title && c.title.replace(/[^a-zA-Z0-9 ]/g, "")
	desc = c.description && c.description.replace(/[^a-zA-Z0-9 ]/g, "")
	date = new Date(c.createdDate)
	console.log(`${title}, ${desc}, ${date}, ${c.createdDate}`)
}
