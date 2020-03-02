#include <stdio.h>
#include <stdlib.h>

struct node {
	int value;
	struct node *next;
};

void printList(struct node *n){
	while(n->next != NULL){
		printf("%d\n", (n->next)->value);
		n = n->next;
	}
}

int main(){

	struct node* head = malloc(sizeof(struct node));
	struct node* first = malloc(sizeof(struct node));
	struct node* second = malloc(sizeof(struct node));
	struct node* third = malloc(sizeof(struct node));

	head->next = first;
	first->next = second;
	second->next = third;
	third->next = NULL;

	first->value = 8;
	second->value = 15;
	third->value = 22;

	printList(head);
	return 0;
}