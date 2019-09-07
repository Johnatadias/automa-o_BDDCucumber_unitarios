package steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import converters.CucumberTransformer;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberSteps {
	
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("qualquer coisa");
	}

	@Quando("^executá-lo$")
	public void executáLo() throws Throwable {
	}

	@Então("^a especificão deve finalizar com sucesso$")
	public void aEspecificãoDeveFinalizarComSucesso() throws Throwable {
	}
	
	private int contador =0;
	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int arg1) throws Throwable {
	    contador = arg1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
	   contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
	   // System.out.println(arg1);
	   // System.out.println(contador);
	   // System.out.println(contador == arg1);
	   //Assert.assertTrue(contador == arg1);	// checagem com true
	    Assert.assertEquals(arg1, contador);	// outra forma de checar a igualdade
	}
	
	Date entrega = new Date();
	
	@Dado("^que a entrega é dia (.*)$")
	public void queAEntregaÉDia(@Transform(CucumberTransformer.class)Date data) throws Throwable {
	    entrega = data;
	    System.out.println(entrega);
	}

	@Quando("^a entrega atrasdar (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasdarDias(int arg, String tempo) throws Throwable {
	    Calendar cal = Calendar.getInstance();
	    cal.setTime(entrega);
	    if(tempo.equals("dias")) {
	    cal.add(Calendar.DAY_OF_MONTH, arg);
	    }
	    if(tempo.equals("meses")) {
	    cal.add(Calendar.MONTH, arg);
	    }
	    entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada (.*)$") //Expressão sem o transforme: (\\d{2}\\/\\d{2}\\/\\d{4})
	public void aEntregaSeráEfetuada(@Transform(CucumberTransformer.class) Date date) throws Throwable {
	    DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	    
	    String dataFormatada1 = format.format(date);
	    
	    String dataFormatada = format.format(entrega);
	    Assert.assertEquals(dataFormatada1, dataFormatada);
	}
}
