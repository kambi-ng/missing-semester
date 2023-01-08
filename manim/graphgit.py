from manim import *


def shift_left(lt: dict[int, list[int]]):
    return {k: [v[0] - 1, v[1], 0] for k, v in lt.items()}


class GraphGit(Scene):
    def construct(self):
        vertices = [1, 2, 3, 4]
        edges = [(1, 2), (2, 3), (3, 4)]
        lt = {1: [-2, 0, 0], 2: [-1, 0, 0], 3: [0, 0, 0], 4: [1, 0, 0]}
        G = Graph(vertices, edges, layout=lt, edge_config={"stroke_color": BLUE})
        text = Text("Kondisi awal", font_size=32)
        text.move_to(DOWN * 0.5)
        self.play(Create(G), Create(text))
        self.wait()
        self.play(FadeOut(text))

        text = Text(
            "Dina membuat branch 'foo' dan commit di branch foo",
            font_size=32,
        )
        text.move_to(DOWN * 0.5)
        lt = shift_left(lt)
        self.play(G.animate.change_layout(layout=lt))
        G.add_vertices(5, positions={5: [1, 1, 0]})
        self.play(
            G.animate.add_edges((4, 5), edge_config={"stroke_color": RED}),
            Create(text),
        )
        self.wait()
        self.play(FadeOut(text))

        text = Text(
            "Budi membuat commit di branch main",
            font_size=32,
        )
        text.move_to(DOWN * 0.5)
        lt = shift_left(lt)
        self.play(G.animate.change_layout(layout=lt))
        G.add_vertices(6, positions={6: [1, 0, 0]})
        self.play(
            G.animate.add_edges((4, 6)),
            Create(text),
        )
        self.wait()
        self.play(FadeOut(text))

        text = Text(
            "Dina membuat commit di branch foo",
            font_size=32,
        )
        text.move_to(DOWN * 0.5)
        lt = shift_left(lt)
        self.play(G.animate.change_layout(layout=lt))
        G.add_vertices(7, positions={7: [1, 1, 0]})
        self.play(
            G.animate.add_edges((5, 7), edge_config={"stroke_color": RED}),
            Create(text),
        )
        self.wait()
        self.play(FadeOut(text))

        text = Text(
            "Budi melakukan merge branch foo ke branch main",
            font_size=32,
        )
        text.move_to(DOWN * 0.5)
        lt = shift_left(lt)
        self.play(G.animate.change_layout(layout=lt))
        G.add_vertices(8, positions={8: [1, 0, 0]})
        self.play(
            G.animate.add_edges((7, 8), edge_config={"stroke_color": RED}),
            G.animate.add_edges((6, 8)),
            Create(text),
        )
        self.wait()
        self.play(FadeOut(text))

        # To merge back into main branch
        # lt = {k: [v[0], 0, 0] for k, v in lt.items()}
        # self.play(G.animate.change_layout(layout=lt))
        # self.play(
        #     G.edges[(4, 5)].animate.set_stroke(BLUE),
        #     G.edges[(5, 7)].animate.set_stroke(BLUE),
        # )

        lt = {k: [v[0] + 2, v[1], 0] for k, v in lt.items()}
        self.play(G.animate.change_layout(layout=lt))
