#include <stdio.h>
#include <stdlib.h>

int main(){
	int i = 0, temp = 0, tam = 5, *vect, **vectA, **vectB;
	
	vect = malloc(tam * sizeof(int));
	vectA = vect;
	
	do{
		printf("Insira um numero: \n");
		scanf("%i", &temp);
	
		if(temp >=0){
			if(i == tam){
				int *vectTemp;
				tam = tam * 2;
				vectTemp = realloc(vect, tam*sizeof(int));
				if(vectTemp){
					vect = vectTemp;
					printf("\nVetor realocado!\n\n");
				} else{
					printf("Nao ha espaco suficiente para realocacao!!!");
					free(vect);
					return 0;
				}
				
			}
			*(vect+i) = temp;
			printf("Memoria alocada!\n");
		}
		i++;
	}while(temp >=0);
	
	printf("\n------------+++----------\n\n");
	
	int j;
	for(j=0; j< i-1; j++){
		printf("Memoria numero %io: %i\n\n", j+1, *(vect+j));
	}
	
	vectB = vect;
	
	printf("\n------------+++----------\n\n");
	
	printf("Qtde. de elementos inseridos: %i\n", i-1);
	
	printf("\n------------+++----------\n\n");
	
	printf("Tamanho final do vetor: %i bytes\n", tam*sizeof(int));
	
	printf("\n------------+++----------\n\n");
	
	if(vectA = vectB){
		printf("Memoria nao mudou de endereco!\n");
	} else{
		printf("Memoria mudou de endereco!\n");
	}
	
	free(vectA);
	free(vectB);
	free(vect);
	return 0;
}
