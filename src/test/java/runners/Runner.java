package runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/alugar_filmes.feature", // diretorio para cucumber.feature
		glue = "steps", // buscar o pacote dos steps
		//tags = "@esse", // tag para executar apenas um cenário, tag ~@ignore serve para não executar o cenário que estiver com essa tag
		plugin = {"pretty", "html:target/report-html", "json:target/report-json"}, //  pretty detalhar mais o console
		monochrome = true, // retirar os caracteres especiais
		snippets = SnippetType.CAMELCASE, // deixar os metodos do cucumber no padrao camelcase
		dryRun = false, // Ele valida a sintaxe e verifica se o mapeamento de todos os passos para as classes step estão corretos, devo usar antes de exutar normal para validar todos, true para valida, false para desativar ele
		strict = false
		)
public class Runner {

	@BeforeClass
	public static void reset() {
		WebDriver driver = new ChromeDriver();
	}
}
