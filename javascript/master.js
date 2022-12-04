let	nameUser
let commandHeader
let commandBox
document.getElementById('enterButton').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
		document.getElementById('enterButton').disabled = true
		// event.preventDefault();
		let parent = document.querySelectorAll('#parent')
		document.querySelector('.animation').style.display = 'block'
		let counter = 1
		for(let i = 0 ; i < parent.length ; i++ ){
			parent[i].style.animation = 'animated-text 1s steps(30,end) 1s 1 normal both'
			parent[i].style.animationDelay = counter+ 's'
			counter = counter + 2
		}
		setTimeout(()=>{
			document.querySelector('.animation').style.display = 'none';
			document.querySelector('.nameEntry').style.display = 'none';
			document.querySelector('.commandLine').style.display = 'block';
		}, 10000);
	}
	
    nameUser = document.getElementById('enterButton').value


	document.getElementById('userName').innerHTML = nameUser
	document.getElementById('commandButton').focus()
	document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
		};
	commandHeader = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Abdul</span>:/PORTFOLIO$ `

	input = `-> </span></span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

	commandBox = commandHeader + input

})

function onblur (event) { 
	let blurEl = this; 
	setTimeout(function() {
	    blurEl.focus()
	}, 10);
};

let iC = false
let iP = false
let iPW = false
let cdCommand = (command, output) => {
	if (command.split(' ')[1] == 'BIO'){
		output.innerHTML = `<p class="bio">
				<span style='font-weight: bold; color: #f600f6'> Abdul Bhashith </span> | Cloud Engineer <br>
				I am a Codiner at <span style='color: #ffa500'>Codincity</span><br>
				I <span style='color: #ff1a1a'>love watching movies</span> and I am <span style='color: #ff3333'>passionate</span> to learn <span 'style: color:#00ff9c'>new</span> things.<br>
				People lives don’t end when they die, It ends when they loose faith.
			</p> ${commandBox}`
		} else if (command.split(' ')[1] == 'CERTIFICATES'){
			commandBox = commandHeader + `<span>/Certificates/</span>` + input 
			iC = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'SKILLS') {
			output.innerHTML = `<div class="skills" >
			<table >
				<tr>
					<th>AWS</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 80%; background-color:  #16e110 ;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Azure</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 80%; background-color:  #16e110 ;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>OCI</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 60%; background-color: #31c31a ;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Terraform</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 70%; background-color:  #2ca818;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Python</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 40%; background-color:  #2eb019;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Web Development</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 65%; background-color: #2ca818;">
							</div>
						</div>
					</td>
				</tr>
			</table>
			</div> ${commandBox}`
		} else if (command.split(' ')[1] == 'PROJECTS') {
			commandBox = commandHeader + '<span>/Projects/</span>' + input
			iP = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'PROJECTSINWORK') {
			commandBox = commandHeader + '<span>/ProjectsInWork/</span>' + input
			iPW = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == '..') {
			commandBox = commandHeader + input 
			iC = false
			iP = false
			iPW = false
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'SOCIALLINKS') {
			output.innerHTML = `<div class='contact'>Collaborate! Get in touch !<br>
			<a href='https://github.com/AbdulBhashith' style='margin: 50px' target='_blank'><img src="./svg icons/github.svg"></a>
			<a href='https://www.linkedin.com/in/abdul-bhashith/' style='margin: 50px' target='_blank'><img src="./svg icons/linkedin.svg"></a><br>
			</div>
			${commandBox}`
		} else if (command.split(' ')[1] == 'SENDAMESSAGE') {
			output.innerHTML = `
			<form action="https://formspree.io/f/myyvrgne" method="POST" class='form'>
				<table>
					<tr>
						<label>
							<td> Your Name: </td>
							<td> <input type="text" name="name" placeholder='Enter your name'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your E-mail: </td>
							<td> <input type="text" name="_replyto" placeholder='Enter your email'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your Message: </td>
							<td> <textarea name="message" placeholder='Enter your message'></textarea> </td>
						</label>
					</tr>
					<tr>
						<label>
						<td><button class="decor" role="button">Send</button></td>
						</label>
					</tr>
				</table>
			</form>
			${commandBox}`
		} else {
			output.innerHTML = `<p class="error">-portfolio: Directory: not found </p> ${commandBox}`	
		}
}
let caller = (event) => {
	if(event.keyCode === 13) {
		
		let cb = document.querySelectorAll('#commandButton')
		cb[cb.length-1].disabled = true

		let command = document.querySelectorAll('#commandButton')
		command = command[command.length-1].value

		let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
		
		command = command.replace(/\s+/g, " ").trim().toUpperCase();
		if (command.split(' ')[0] == 'CD') {
			if (command.split(' ')[1] == '..'){
				cdCommand(command, output)
				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else if (iC || iP || iPW ){
				output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else {
				cdCommand(command, output)

				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
				// cdCommand(command, output)
			}
		} else if (command == 'LS' || command == 'DIR') {
			if (iC) {
				output.innerHTML = `
					<div class='certificates'>
						<div class='certificate'>
							<h3 style="color: #fffc58;">AZ-900 Azure Fundamentals</h3>
							<p>Issued June 2022</p>
							<a href="https://www.credly.com/badges/08b03877-3cdb-4b19-8601-b20dc7949330" target='_blank'>Verify Credential</a>
						</div>
					</div>

				${commandBox}`
			} else if (iP) { 
				output.innerHTML = `
				<div class='projects'>
					<ul class='project'>
						<li>
							<h3>Command Line Portfolio</h3>
							<a href="https://github.com/Abdul13/CLI-Portfolio" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href=''>Still Deploying</a></p>
						</li>
					</ul>
				</div>
				${commandBox}
				`
			} else if (iPW) {
				output.innerHTML = `
				<p class='ls'>
					Along with Learning and I am preparing the blogs based on <span style='color: #ffa500'> Cloud</span>.
					It's related to very much of beginners because I am a beginner too 😉!
					Technologies Pursuing <span style='color: #ffa500'>AWS, Azure, OCI </span>as well as <span style='color: #ffa500'>some DevOps tools too.</span>
				</p>${commandBox}
				`	
			} else {
				output.innerHTML = `<p class="ls">
				<div style="color:  #f0fb0e ; padding-left: 45px; line-height: normal;">
					<p>bio</p>
					<p>/certificates</p>
					<p>skills</p>
					<p>/projects</p>
					<p>/projectsInWork</p>
					<p>/socialLinks</p>
					<p>sendAMessage</p>
				</div>

				</p> ${commandBox}`
			}
		} else if (command == 'HELP' || command == 'INFO') {
			output.innerHTML = `<p class="ls">
			<span style="font-weight: bold;">PORTFOLIO POWERSHELL HELP SYSTEM</span><br> 
				<span style='padding-left: 35px'>Displays help about Portfolio Powershell cmdlets</span>
			<br>
			<br>
			These commands are defined internally.
			<div style="color: #fffc58; padding-left: 45px; line-height: normal;">
				<p>HELP - To open powershell help system</p>
				<p>INFO - To open powershell help system</p>
				<p>DIR - To view all folders and files in the directory</p> 
				<p>LS - To view all folders and files in the directory</p>
				<p>CD - To change the current directory</p>
				<p>REFRESH - To refresh the page</p>
				<p>CLEARSCREEN - To clear the page</p>
				<p>CLS - To clear the page</p>
				<p>EXIT - To exit the page</p>
			</div>
			</p> ${commandBox}`
		} else if (command == 'REFRESH'){
			location.reload()
		} else if (command == 'CLS' || command == 'CLEARSCREEN') {
			document.querySelector('.commandLine').innerHTML = `${commandBox}`
		} else if (command == 'EXIT') {
			document.querySelector('.container').innerHTML = `<div class='exit'><h1>Thank You</h1><p>⭐ Made with ❤️ by Abdul Bhashith ⭐</p></div>`
		} else {
			output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
		}
		let btn = document.querySelectorAll('#commandButton')
		btn = btn[btn.length-1]
		btn.focus()
	}
	window.scrollTo(0,document.body.scrollHeight);

}
