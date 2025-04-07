export function getFormatTodayDate() {
    var today = new Date();
  
    const formatDate = today.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    return formatDate;
  }