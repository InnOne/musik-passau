namespace ViewModels;

public class Schuelerstimme
{
    public string Name { get; set; }
    public DateTime Geburtstag { get; set; }
    public SchuelerTyp SchuelerTyp { get; set; }
    public bool Maennlich { get; set; }
    public int SchuelerSeit { get; set; }
    public string ImageSrc { get; set; }
    public string Bewertung { get; set; }
}

public enum SchuelerTyp
{
    Klavier,
    Gesang
}