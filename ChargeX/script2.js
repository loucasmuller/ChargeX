// Ouvrir la fenêtre modale
function openModal(product) {
    document.getElementById('product-modal').style.display = "block";

    // Modifier le contenu en fonction du produit
    if (product === 'mac-safe') {
        document.getElementById('modal-product-name').innerText = "Mac Safe - Batterie Externe";
        document.getElementById('modal-description').innerText = "Batterie externe Mac Safe, idéale pour les appareils Apple.";
        document.getElementById('modal-main-image').src = "batterie_externe_1.jpg"; // Image principale
        document.getElementById('modal-images').innerHTML = `
            <img src="batterie_externe_1.jpg" alt="Image 1" class="modal-image">
            <img src="batterie_externe_2.jpg" alt="Image 2" class="modal-image">
            <img src="batterie_externe_3.jpg" alt="Image 3" class="modal-image">
            <img src="batterie_externe_4.jpg" alt="Image 4" class="modal-image">
        `;
    }
    else if (product === 'coque-mac-safe') {
        document.getElementById('modal-product-name').innerText = "Coque Mac Safe";
        document.getElementById('modal-description').innerText = "Coque Mac Safe pour une protection optimale.";
        document.getElementById('modal-main-image').src = "coque.jpg"; // Image principale
        document.getElementById('modal-images').innerHTML = `
            <img src="coque.jpg" alt="Image 1" class="modal-image">
            <img src="coque_2.jpg" alt="Image 2" class="modal-image">
        `;
    }
    // Ajouter d'autres conditions pour chaque produit ici
}

// Fermer la fenêtre modale
function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}
