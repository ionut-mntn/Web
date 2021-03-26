<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
	<xsl:template match = "/cars">
		<html>
			<!--asa nu i bun!!!!-->
			<!--head>
				<link rel="stylesheet" href="cars.css">
			</head-->
				<header>
					<link rel="stylesheet" type="text/css" href="cars.css"/>
					<!--nuj dc se pune slash-ul ala la final-->
				</header>
			<body>
				<h2>Car Types</h2>
				<table class="table table-sortable" id="myTable">
					<thead>
						<tr>
							<th>Brand</th>
							<th>Model</th>
							<th>Category</th>				
							<th>Year</th>				
							<th>VIN</th>			
						</tr>
					</thead>
					<tbody>
						<xsl:for-each select="car">
						<!--full, complet este asa:-->
						<!--xsl:sort select="category" data-type"text" order="ascending"/-->
						
						<!-- dar text si ascending sunt implicite, deci le putem omite:-->
						<!--xsl:sort select="category"/-->
						<!-- atentie la slash-ul de la final !!!-->
						
						<!--mai avem varianta descending(nu trebuie precizat data-type daca suprascriem o valoare default, ce bine)-->
						<!--xsl:sort select="category" order="descending"/-->
						
						<!--exemplu sortare dupa mai multe criterii(coloane)-->
						<xsl:sort select="category" order="ascending"/>
						<xsl:sort select="brand" order="ascending"/>
						
						<!--xsl:choose-->
							<tr class="{category}">
							<!-- <tr> -->
								<td><xsl:value-of select="brand"/></td>
								<td><xsl:value-of select="model"/></td>
								<!--xsl:choose-->
								<!--xsl:when test="type = 'convertible'"-->
									<!--td class="${category}"-->

									<!-- !!! asa se face corect !!!-->
									<!-- <td class="{category}"> -->
									<td>
										<xsl:value-of select="category"/>
										<!--/xsl:value-of-->
									</td>
								<!--/xsl:when-->
								<!--/xsl:choose!-->
								<!--CUM SE FACE PROSTIA ASTA????????-->
								<td><xsl:value-of select="year"/></td>
								<td><xsl:value-of select="VIN"/></td>
								<!-- !!aparent astea trebuie inchise chiar aicea !! -->
							</tr>
						<!--xsl:choose-->
						</xsl:for-each>
					</tbody>				
				</table>
				<script type="text/javascript" src="app.js">&#160;</script>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>