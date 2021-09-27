using System;

namespace API.Models
{
    public class Automovel
    {
        public Automovel() => CriadoEm = DateTime.Now;

        public int Id { get; set; }

        public string Placa { get; set; }
        public string Fabricante { get; set; }
        public string Modelo { get; set; }
        public int ano { get; set; }
        public string cor { get; set; }

        public DateTime CriadoEm { get; set; }
    }
}