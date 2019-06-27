<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;
</script>

<style>
	.div-container {
		margin: 1.5cm;
		margin-left: 2.5cm;
	}
	.subtitle {
		text-transform: uppercase;
		text-decoration: underline;
	}
	.paragraph {text-align: justify}
	.tiny-desc {
		font-size: 12px;
		font-style: italic;
	}
	row { display: flex }
	flex1 { flex: 1 }
	flex2 { flex: 2 }
	flex3 { flex: 3 }
	flex4 { flex: 4 }

	.pb { padding-bottom: 1rem }

	ul.circle > li {
		list-style-type: circle;
	}
	ul.square > li {
		list-style-type: square;
	}
	ul.alpha > li {
		list-style-type: lower-alpha;
	}
	ul.decimal > li {
		list-style-type: decimal;
	}
	ul.roman > li {
		list-style-type: lower-roman;
	}
	ul.upper-roman > li {
		list-style-type: upper-roman;
	}

	li {word-wrap: break-word;}
</style>

<div class="div-container">
	<div>
		<h1>
			{name}
		</h1>
		<div>
			{address}
		</div>
		<div>
			{email} &nbsp; | &nbsp; {phone}
		</div>
		<div>
			<a href="{linkedin.link}" target="blank">
				{linkedin.url}
			</a>
		</div>
	</div>

	<div class="section-summary">
		<h3 class="subtitle">
			PERSONAL SUMMARY
		</h3>
		<div class="paragraph">
			Your summary should be no more than 3/4 lines. It should highlight relevant experience, skills and achievements. For optimum benefit, tailor your summary for each job you are targeting. 
		</div>
	</div>

	<div class="section-summary">
		<h3 class="subtitle">
			CAREER ACHIEVEMENTS
		</h3>
		<ul class="topic square">
			<li>Include 4/5 key achievements or highlights. Should be relevant and quantifiable.</li>
			<li>Hired and led a team of 30 sales staff.</li>
			<li>Grew sales revenue by 120%, from x to y.</li>
			<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
		</ul>
	</div>

	<div class="section-summary">
		<h3 class="subtitle">
			CAREER HISTORY
		</h3>

		<div>
			<strong>Assistant at Sao Joao</strong>
			<div class="tiny-desc">Largest eggs producer in south Brazil</div>
			<div>Sept ‘09 – present</div>

			<ul class="topic decimal">
				<li>Insert content. Highlight responsibilities and key achievements/deliverables.</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
			</ul>
		</div>
		<div>
			<strong>Assistant at Sao Joao</strong>
			<div>Sept ‘09 – Sept '09 (2 years)</div>

			<ul class="topic circle">
				<li>Insert content. Highlight responsibilities and key achievements/deliverables.</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
			</ul>
		</div>
		<div>
			<strong>Assistant at Sao Joao</strong>
			<div>Aug ‘02 – Sept '06 (4 years)</div>

			<ul class="topic upper-roman">
				<li>Insert content. Highlight responsibilities and key achievements/deliverables.</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
				<li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
			</ul>
		</div>
	</div>


	<div class="section-summary">
		<h3 class="subtitle">
			EDUCATION
		</h3>

		<div class="pb">
			<row>
				<flex1>
					2016 - 2020
				</flex1>
				<flex3>
					<div>Trinity College</div>
					<div><strong>Trinity College</strong></div>
				</flex3>
			</row>
		</div>

		<div class="pb">
			<row>
				<flex1>
					2016 - 2020
				</flex1>
				<flex3>
					<div>Universidade de Sao Paulo, Sao Paulo, Brazil</div>
					<div><strong>Diploma in Photography</strong></div>
				</flex3>
			</row>
		</div>

		<div class="pb">
			<row>
				<flex1>
					1998
				</flex1>
				<flex3>
					<div>College</div>
					<div><strong>Leaving Certificate</strong></div>
				</flex3>
			</row>
		</div>
	</div>


	<div class="section-summary">
		<h3 class="subtitle">
			ADDITIONAL INFORMATION
		</h3>

		<ul class="topic alpha">
			<li><strong>Tools and technology:</strong> MS Office, Photoshop, SAP</li>
			<li><strong>Languages:</strong> French (Fluent) and German (Basic).</li>
		</ul>
	</div>
	
	<div class="section-summary">
		<h3 class="subtitle">
			INTERESTS
		</h3>

		<ul class="topic">
			<li>Outline interests and activities. Highlight interests that may add value to your application.</li>
			<li>Love to backpack travel, etc</li>
		</ul>
	</div>

	<div>
		<strong style="font-style: italic">
			References available upon request
		</strong>
	</div>

</div>
